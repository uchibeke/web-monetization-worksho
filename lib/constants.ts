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

export const SITE_URL = 'https://demo.vercel.events';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'interledger';
export const BRAND_NAME = 'Web Monetization';
export const SITE_NAME_MULTILINE = ['Web Monetization', 'Workshop'];
export const SITE_NAME = 'Web Monetization Workshop';
export const META_DESCRIPTION =
  'The workshop aims to bring community members together to get and discuss community feedback and leave with changes to the Web Monetization specification';
export const SITE_DESCRIPTION =
  'The Web Monetization Workshop event app.';
export const DATE = 'July 28 - 29, 2021';
export const SHORT_DATE = 'July 28 - 29, 2021 | 7am PST and 3pm PST';
export const FULL_DATE = 'July 28 - 29, 2021 | 7am Pacific Time (GMT-7) and 3pm Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/WICG/webmonetization';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Showcase 1',
    route: '/stage/showcase1'
  },
  {
    name: 'Showcase 2',
    route: '/stage/showcase2'
  },
  {
    name: 'Architecture session 1',
    route: '/stage/architecture1'
  },
  {
    name: 'Architecture session 2',
    route: '/stage/architecture2'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  // {
  //   name: 'Expo',
  //   route: '/expo'
  // },
  // {
  //   name: 'Jobs',
  //   route: '/jobs'
  // }
];

export type TicketGenerationState = 'default' | 'loading';
