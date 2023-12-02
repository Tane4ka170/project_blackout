import React from 'react';

const Symbols = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '0',
          height: '0',
          overflow: 'hidden',
        }}
      >
        <defs>
          <symbol id="icon-checked" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M26.667 8 12 22.667 5.333 16"
            />
          </symbol>
          <symbol id="icon-burger-menu" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.182"
              d="M4 11.333h24M4 20.667h24"
            />
          </symbol>
          <symbol id="user-icon-down" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.2"
              d="m8 12 8 8 8-8"
            />
          </symbol>
          <symbol id="user-icon-up" viewBox="0 0 32 32">
            <path
              stroke="#fafafa"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.2"
              d="m8 20 8-8 8 8"
              style={{ stroke: 'var(#fafafa)' }}
            />
          </symbol>
          <symbol id="icon-trash-icon" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.824"
              d="M4.706 8.471h22.588M24.785 8.471V26.04a2.509 2.509 0 0 1-2.51 2.51H9.726a2.509 2.509 0 0 1-2.51-2.51V8.471m3.765 0v-2.51a2.509 2.509 0 0 1 2.51-2.51h5.02a2.509 2.509 0 0 1 2.51 2.51v2.51M13.49 14.745v7.529M18.51 14.745v7.529"
            />
          </symbol>
          <symbol id="icon-pen-svg" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.824"
              d="M22.275 4.706a3.545 3.545 0 0 1 3.867-.769 3.538 3.538 0 0 1 2.191 3.279 3.553 3.553 0 0 1-1.039 2.51L10.353 26.667l-6.902 1.882 1.882-6.902L22.274 4.706z"
            />
          </symbol>
          <symbol id="icon-search" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              d="M14.667 25.333c5.891 0 10.667-4.776 10.667-10.667S20.558 3.999 14.667 3.999 4 8.775 4 14.666s4.776 10.667 10.667 10.667zM28 28l-5.8-5.8"
            />
          </symbol>
          <symbol id="icon-close" viewBox="0 0 32 32">
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.667"
              d="M24 8 8 24M8 8l16 16"
            />
          </symbol>
          <symbol id="icon-clock" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333S23.364 2.667 16 2.667 2.667 8.637 2.667 16 8.637 29.333 16 29.333z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              d="M16 8v8l5.333 2.667"
            />
          </symbol>
          <symbol id="icon-log-out" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.447"
              d="M12.235 27.294h-5.02a2.509 2.509 0 0 1-2.51-2.51V7.215a2.509 2.509 0 0 1 2.51-2.51h5.02M21.02 22.275 27.294 16 21.02 9.726M27.294 16H12.235"
            />
          </symbol>
          <symbol id="icon-calendar" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              d="M25.333 5.333H6.666A2.667 2.667 0 0 0 3.999 8v18.667a2.667 2.667 0 0 0 2.667 2.667h18.667A2.667 2.667 0 0 0 28 26.667V8a2.667 2.667 0 0 0-2.667-2.667zM21.333 2.667V8M10.667 2.667V8M4 13.333h24"
            />
          </symbol>
          <symbol id="icon-user" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.6"
              d="M26.667 28v-2.667A5.332 5.332 0 0 0 21.334 20H10.667a5.332 5.332 0 0 0-5.333 5.333V28M15.999 14.667a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666z"
            />
          </symbol>
          <symbol id="icon-default-svg" viewBox="0 0 32 32">
            <path
              fill="#0ef387"
              d="M29.298 26.25a15.421 15.421 0 0 0-7.597-6.654 9.502 9.502 0 0 0-.145-15.307 9.5 9.5 0 0 0-11.255 15.307 15.42 15.42 0 0 0-7.598 6.654 1.5 1.5 0 1 0 2.595 1.501c2.265-3.915 6.265-6.25 10.701-6.25s8.436 2.336 10.701 6.25a1.502 1.502 0 0 0 2.024.507 1.502 1.502 0 0 0 .572-2.006zM9.5 12a6.5 6.5 0 1 1 6.5 6.5A6.507 6.507 0 0 1 9.5 12z"
              style={{
                fill: 'var("#0ef387")',
              }}
            />
          </symbol>
          <symbol id="icon-success" viewBox="0 0 32 32">
            <path d="M0 16C0 7.162 7.162 0 16 0s16 7.162 16 16c0 8.837-7.163 16-16 16S0 24.837 0 16zm23.237-2.762c.681-.681.681-1.794 0-2.475s-1.794-.681-2.475 0l-6.763 6.762-2.763-2.762c-.681-.681-1.794-.681-2.475 0s-.681 1.794 0 2.475l4 4a1.755 1.755 0 0 0 2.475 0l8-8z" />
          </symbol>
          <symbol id="icon-error" viewBox="0 0 32 32">
            <path d="M0 16C0 7.162 7.162 0 16 0s16 7.162 16 16c0 8.837-7.163 16-16 16S0 24.837 0 16zm10.938-2.994 2.944 2.938-2.944 2.994c-.581.588-.581 1.538 0 2.069.588.637 1.537.637 2.069 0l2.938-2.888 2.994 2.888c.588.637 1.538.637 2.069 0 .637-.531.637-1.481 0-2.069l-2.888-2.994 2.888-2.938c.637-.531.637-1.481 0-2.069-.531-.581-1.481-.581-2.069 0l-2.994 2.944-2.938-2.944c-.531-.581-1.481-.581-2.069 0-.581.588-.581 1.537 0 2.069z" />
          </symbol>
          <symbol id="icon-eye-off" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              d="M23.92 23.92A13.43 13.43 0 0 1 16 26.667C6.667 26.667 1.333 16 1.333 16A24.605 24.605 0 0 1 8.08 8.08m5.12-2.427a12.161 12.161 0 0 1 2.8-.32C25.333 5.333 30.667 16 30.667 16a24.646 24.646 0 0 1-2.88 4.253m-8.96-1.426a4.003 4.003 0 0 1-5.755.102 3.994 3.994 0 0 1-.824-4.457c.219-.491.534-.932.927-1.298M1.333 1.333l29.333 29.333"
            />
          </symbol>
          <symbol id="icon-eye" viewBox="0 0 32 32">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              d="M1.333 16S6.666 5.333 16 5.333 30.667 16 30.667 16 25.334 26.667 16 26.667C6.667 26.667 1.333 16 1.333 16z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              d="M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
            />
          </symbol>
          <symbol id="icon-arrow-up" viewBox="0 0 32 32">
            <path
              fill="#fafafa"
              d="M25.905 1.613A1.882 1.882 0 0 0 23.772.02L7.006 2.448a1.882 1.882 0 1 0 .54 3.726l14.903-2.159 2.159 14.903a1.882 1.882 0 1 0 3.726-.54L25.906 1.612zM5.273 30.154 25.55 3.009 22.534.756 2.257 27.901l3.016 2.253z"
              style={{
                fill: 'var( #fafafa)',
              }}
            />
          </symbol>
          <symbol id="icon-arrow-down" viewBox="0 0 32 32">
            <path d="M4.201 29.5a2 2 0 0 0 2.221 1.751l17.876-2.113a2 2 0 1 0-.47-3.972L7.939 27.044 6.061 11.155a2 2 0 1 0-3.972.47l2.113 17.876zM26.125.753 4.617 28.027l3.141 2.477L29.266 3.23 26.125.753z" />
          </symbol>
          <symbol id="site-icon" viewBox="0 0 32 32">
            <path
              fill="#0ef387"
              d="M22.009 20.007c-.062-.167-5.564-11.116-5.647-11.282a3.653 3.653 0 0 0-1.489-1.728 3.572 3.572 0 0 0-4.902 1.311 3.614 3.614 0 0 0 .021 3.684c.062.146 5.316 10.637 5.419 10.803.062.167.145.312.228.479.29.708.807 1.311 1.489 1.728 1.717.999 3.91.437 4.902-1.291a3.607 3.607 0 0 0-.021-3.705z"
              style={{ fill: 'var(--color1, #0ef387)' }}
            />
            <path
              fill="#fafafa"
              d="M15.659 12.597c.6-.645.972-1.52.972-2.477 0-1.977-1.593-3.601-3.579-3.601-1.22 0-2.296.604-2.937 1.54-.124.125-9.039 11.199-9.143 11.344-.6.645-.972 1.52-.972 2.477a3.591 3.591 0 0 0 3.579 3.601c1.22 0 2.296-.604 2.937-1.54.124-.146 9.06-11.199 9.143-11.344zM31.028 12.597c.6-.645.972-1.52.972-2.477a3.591 3.591 0 0 0-3.579-3.601 3.543 3.543 0 0 0-2.937 1.54c-.124.125-9.06 11.199-9.163 11.344-.6.645-.972 1.52-.972 2.477a3.591 3.591 0 0 0 3.579 3.601c1.22 0 2.296-.604 2.937-1.54.145-.146 9.06-11.199 9.164-11.344z"
              style={{ fill: 'var(--color2, #fafafa)' }}
            />
          </symbol>
        </defs>
      </svg>
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '0',
          height: '0',
          overflow: 'hidden',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <symbol id="icon-trash-2" viewBox="0 0 32 32">
            <path
              fill="none"
              stroke="#0ef387"
              style={{ stroke: 'var( #0ef387)' }}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              d="M4 8h24M25.333 8v18.667a2.67 2.67 0 0 1-2.667 2.667H9.333a2.668 2.668 0 0 1-2.667-2.667V8m4.001 0V5.333a2.668 2.668 0 0 1 2.667-2.667h5.333a2.668 2.668 0 0 1 2.667 2.667V8M13.333 14.667v8M18.667 14.667v8"
            />
          </symbol>
          <symbol id="icon-edit-2" viewBox="0 0 32 32">
            <path
              fill="none"
              stroke="#0ef387"
              style={{ stroke: 'var(--color1, #0ef387)' }}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              d="M22.667 4a3.76 3.76 0 0 1 2.667-1.104A3.779 3.779 0 0 1 28 4a3.783 3.783 0 0 1 .818 4.109c-.19.458-.467.873-.818 1.223l-18 18-7.333 2 2-7.333 18-18z"
            />
          </symbol>
          <symbol id="icon-check" viewBox="0 0 32 32">
            <path
              fill="none"
              stroke="#0ef387"
              style={{ stroke: 'var(--color1, #0ef387)' }}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="3"
              d="M26.667 8 12 22.667 5.333 16"
            />
          </symbol>
        </defs>
      </svg>
    </div>
  );
};

export default Symbols;
