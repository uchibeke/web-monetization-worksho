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

import { useState } from 'react';
import { PageState, ConfDataContext, UserData } from '@lib/hooks/use-conf-data';
import Ticket from './ticket';
import Layout from './layout';
import ConfContainer from './conf-container';
import Hero from './hero';
import Form from './form';
import LearnMore from './learn-more';
import useLoginStatus from '@lib/hooks/use-login-status';
import cn from 'classnames';
import styles from './form.module.css';
import { useRouter } from 'next/router';

type Props = {
  defaultUserData: UserData;
  sharePage?: boolean;
  defaultPageState?: PageState;
};

export default function Conf({
  defaultUserData,
  sharePage,
  defaultPageState = 'registration'
}: Props) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [pageState, setPageState] = useState<PageState>(defaultPageState);
  const { loginStatus, mutate } = useLoginStatus();
  const router = useRouter();

  return (
    <ConfDataContext.Provider
      value={{
        userData,
        setUserData,
        setPageState
      }}
    >
      <Layout>
        <ConfContainer>
          {pageState === 'registration' && !sharePage ? (
            <>
              <Hero />

              {loginStatus === 'loggedIn' ? (
                <div>
                  <form style={{ textAlign: 'center' }}>
                    You're in!
                    <button
                      type="submit"
                      className={cn(styles.submit, styles['default'])}
                      onClick={e => {
                        e.preventDefault();
                        router.push('/schedule');
                      }}
                    >
                      View Schedule
                    </button>
                  </form>
                </div>
              ) : (
                <Form />
              )}
              <LearnMore />
            </>
          ) : (
            <Ticket
              username={userData.username}
              name={userData.name}
              ticketNumber={userData.ticketNumber}
              sharePage={sharePage}
            />
          )}
        </ConfContainer>
      </Layout>
    </ConfDataContext.Provider>
  );
}
