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

export default function IconLogo({
  backgroundColor = 'transparent',
  foregroundColor = 'var(--accents-1)',
  ...props
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="34" viewBox="0 0 26 34" fill="none">
      <path d="M8.83946 21.6572C8.83946 20.9372 8.61816 20.3443 8.17558 19.8784C7.73299 19.4041 6.99534 18.9805 5.96264 18.6078C4.92993 18.2267 4.12672 17.8751 3.55299 17.5533C1.64331 16.4945 0.68847 14.9274 0.68847 12.8521C0.68847 11.446 1.10237 10.2898 1.93017 9.38348C2.75798 8.47714 3.63496 7.96467 5.05287 7.79526V5H7.26581V7.79526C8.69193 8.00702 9.7943 8.63384 10.5729 9.67571C11.3516 10.7091 11.7409 12.0559 11.7409 13.7161H8.76569C8.76569 12.6489 8.5321 11.8103 8.06493 11.2004C7.60595 10.5821 6.97895 10.2729 6.18393 10.2729C5.39711 10.2729 4.7824 10.4931 4.33982 10.9336C3.89723 11.374 3.67594 12.0051 3.67594 12.8267C3.67594 13.5637 3.89313 14.1566 4.32752 14.6055C4.77011 15.046 5.51595 15.4653 6.56505 15.8634C7.61415 16.2615 8.43785 16.63 9.03616 16.9688C9.63448 17.3076 10.1385 17.6973 10.5483 18.1377C10.9581 18.5697 11.2737 19.0695 11.495 19.637C11.7163 20.2045 11.8269 20.8695 11.8269 21.6318C11.8269 23.0633 11.4007 24.2238 10.5483 25.1132C9.70414 26.0026 8.67963 26.5405 7.16336 26.7014V28.6538H5.05287V26.7014C3.43005 26.515 2.18015 25.9136 1.30317 24.8972C0.434391 23.8807 0 22.5339 0 20.8568H2.98747C2.98747 21.924 3.24564 22.7499 3.76199 23.3344C4.28654 23.9188 5.02419 24.2111 5.97493 24.2111C6.90928 24.2111 7.61824 23.9781 8.10181 23.5123C8.59358 23.0464 8.83946 22.428 8.83946 21.6572Z" fill="#6ADAAB"/>
        <rect x="15.7693" y="14.8558" width="1.97115" height="5.91346" fill="#6ADAAB"/>
        <rect x="19.7114" y="12.8846" width="1.97115" height="9.85577" fill="#6ADAAB"/>
      <rect x="23.6538" y="10.9135" width="1.97115" height="13.7981" fill="#6ADAAB"/>
    </svg>
  );
}
