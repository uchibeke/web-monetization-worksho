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

type Props = { color: string; height?: number | string };

export default function PlatformLogo({ color, height = 20 }: Props) {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 477.3 200" >

      <g>
        <ellipse fill="#FFFFFF" cx="386.1" cy="21.4" rx="22.1" ry="21.1" />
        <path fill="#FFFFFF" d="M369.3,71.6v120.2c0,6.5,8.7,8.2,17.4,8.2s17.4-1.7,17.4-8.2V71.6c0-8.7-8.7-9.9-17.4-9.9
     S369.3,62.9,369.3,71.6z"/>
        <path fill="#FFFFFF" d="M442.4,9.9v181.9c0,6.5,8.7,8.2,17.4,8.2s17.4-1.7,17.4-8.2V9.9c0-8.7-8.7-9.9-17.4-9.9S442.4,1.2,442.4,9.9z"
        />
        <path fill="#FFFFFF" d="M192.5,128.6c0-37.8,30.2-71.5,73.8-71.5c43.4,0,74.3,33.2,74.3,71.3c0,41.1-34.2,71.7-73.9,71.7
     C222.8,200,192.5,166.3,192.5,128.6z M266.2,170.9c23.2,0,40.6-19.1,40.6-42.6s-17.4-42.1-40.6-42.1s-40.4,18.9-40.4,42.4
     S243,170.9,266.2,170.9z"/>
        <path fill="#FFFFFF" d="M172.5,163.2c0,18.3-42.7,36.8-72.4,36.8c-36.4,0-70.5-19.5-87.9-50.9C4.1,134.5-0.1,118.1,0,101.3
     c0-19.6,5.6-38.7,16.3-55.1C24.9,33,41.2,15.4,69.9,6c11.2-3.7,22.9-5.6,34.8-5.8c41,0,66.8,28.7,66.8,53.8
     c0,17.2-14,41.7-48.3,41.7c-15.7,0-21-6.6-21-14.2c0-10.2,9.5-22.1,16.4-22.1c2.9,0,4.7,2.9,10.3,2s8.4-4.5,8.4-9.1
     c0-8.7-10.3-20.3-32.2-20.3c-8.4,0.1-16.7,1.5-24.7,4c-19.5,6-30.2,20-35.8,28.7c-7.1,10.9-10.9,23.6-10.8,36.6
     c0,11,2.7,21.8,8,31.4c11.5,20.6,34.1,33.5,58.4,33.5c33.5,0,42.9-18,49.7-20.9C161.8,140.1,172.5,154.6,172.5,163.2L172.5,163.2z"
        />
      </g>
    </svg>
  );
}