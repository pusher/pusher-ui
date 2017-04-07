import React from 'react';


export const icons = [
  'account',
  'account-outline',
  'caret-down',
  'caret-left',
  'caret-right',
  'caret-up',
  'close',
  'copy',
  'documentation',
  'download',
  'expand',
  'plus',
  'pusher-logo',
  'search',
  'support'
];

function IconSet () {
  return (
    <svg style={{ display: 'none' }}>
      <symbol id="icon:account" viewBox="0 0 24 24">
        <g><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></g>
      </symbol>
      <symbol id="icon:account-outline" viewBox="0 0 24 24">
        <g><path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z" /></g>
      </symbol>
      <symbol id="icon:caret-left" viewBox="0 0 24 24">
        <g>
          <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
          <path d="M0-.5h24v24H0z" fill="none" />
        </g>
      </symbol>
      <symbol id="icon:caret-down" viewBox="0 0 24 24">
        <g>
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
          <path d="M0-.75h24v24H0z" fill="none" />
        </g>
      </symbol>
      <symbol id="icon:caret-right" viewBox="0 0 24 24">
        <g>
          <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
          <path d="M0-.25h24v24H0z" fill="none" />
        </g>
      </symbol>
      <symbol id="icon:caret-up" viewBox="0 0 24 24">
        <g>
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </g>
      </symbol>
      <symbol id="icon:close" viewBox="0 0 24 24">
        <g><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></g>
      </symbol>
      <symbol id="icon:copy" viewBox="0 0 24 24">
        <g>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </g>
      </symbol>
      <symbol id="icon:documentation" viewBox="0 0 24 24">
        <g>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </g>
      </symbol>
      <symbol id="icon:download" viewBox="0 0 24 24">
        <g>
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </g>
      </symbol>
      <symbol id="icon:expand" viewBox="0 0 24 24">
        <g><path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></g>
      </symbol>
      <symbol id="icon:plus" viewBox="0 0 12 16">
        <g><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z" /></g>
      </symbol>
      <symbol id="icon:pusher-logo" viewBox="0 0 59 80">
        <g>
          <path d="M48.417 49.444L38.585 73.229 36.012 71.394 41.802 56.726 31.211 59.519C31.211 59.519 26.022 42.42 26.513 30.837 26.218 22.744 27.644 16.96 30.167 13.6 34.274 8.408 42.099 3.953 49.793 7.645 54.701 9.869 57.658 13.889 58.107 17.824 59.479 34.859 38.498 41.817 38.498 41.817L38.085 38.191C38.085 38.191 44.945 35.464 49.105 29.553 53.266 23.643 51.245 15.88 46.569 14.464 42.061 13.577 37.34 18.757 36.516 27.966 34.721 41.776 39.393 52.006 39.393 52.006L48.417 49.444M0 62.396L15.402 74.372 16.522 71.783 8.26 65.71 16.853 63.305C16.853 63.305 10.998 47.535 10.597 32.251 10.229 27.354 9.896 11.684 15.924 8.975 16.976 7.213 18.743 5.903 18.743 5.903 18.743 5.903 3.467 4.584 4.184 32.453 5.706 51.166 9.451 59.821 9.451 59.821L0 62.396" />
          <path d="M29.91,61.761 L38.969,59.263 L30.045,80 L11.998,66.538 L19.098,64.644 C19.098,64.644 3.276,20.694 21.128,5.095 C32.325,-3.789 43.164,3.999 42.965,4.872 C40.203,4.812 37.842,5.844 37.842,5.844 C37.842,5.844 31.789,3.265 27.475,12.503 C23.719,20.705 22.048,34.474 29.91,61.761" />
          <path d="M41.806,17.606 C42.599,24.356 38.244,27.206 38.244,27.206 L37.819,30.659 C37.819,30.659 47.709,25.549 45.669,15.819 C44.566,15.913 42.212,17.242 41.806,17.606" />
        </g>
      </symbol>
      <symbol id="icon:search" viewBox="0 0 24 24">
        <g>
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </g>
      </symbol>
      <symbol id="icon:support" viewBox="0 0 24 24">
        <g>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </g>
      </symbol>
    </svg>
  );
}


export default IconSet;
