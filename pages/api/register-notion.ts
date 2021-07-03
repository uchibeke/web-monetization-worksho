/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NextApiRequest, NextApiResponse } from 'next';
import { NotionUser } from '@lib/types';
import validator from 'validator';
import { COOKIE } from '@lib/constants';
import { getRecord } from '@lib/notion';
import cookie from 'cookie';
import ms from 'ms';
const { Client } = require('@notionhq/client');

type ErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

const notion = new Client({ auth: process.env.NOTION_API_KEY });

type ToSave = {
  email: string;
};

const saveToNotionDB = async ({ email }: ToSave) => {
  (async () => {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID
      },
      properties: {
        Email: {
          email
        }
      }
    });
  })();
};

export default async function registerToNotion(
  req: NextApiRequest,
  res: NextApiResponse<NotionUser | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(501).json({
      error: {
        code: 'method_unknown',
        message: 'This endpoint only responds to POST'
      }
    });
  }

  const email: string = ((req.body.email as string) || '').trim().toLowerCase();
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      error: {
        code: 'bad_email',
        message: 'Invalid email'
      }
    });
  }

  let id;
  let createdAt: string;
  let statusCode: number;
  let name: string | undefined = undefined;

  const existingEmail = await await getRecord(email);

  createdAt = new Date().toLocaleDateString();

  if (existingEmail) {
    statusCode = 201;
  } else {
    await saveToNotionDB({ email });
    statusCode = 201;
  }

  // Save `key` in a httpOnly cookie
  res.setHeader(
    'Set-Cookie',
    cookie.serialize(COOKIE, email, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      path: '/api',
      expires: new Date(Date.now() + ms('7 days'))
    })
  );

  return res.status(statusCode).json({
    id,
    email,
    name
  });
}
