import { css, keyframes } from "styled-components";
import { space } from "./helpers";

const shine = keyframes`
0% { background-position: 440% 50%; }
100% { background-position: 0% 50%; }
`;

const ShellApp = css`
  .shell {
    display: flex;

    & + & {
      margin: ${space()} 0 0;
    }

    &.vertical {
      align-items: center;
      flex-direction: column;
    }

    *:last-child {
      margin-bottom: 0;
    }

    .avatar::before,
    .col,
    .figure::before,
    .title,
    .note,
    .paragraph {
      background: ${({ theme }) => theme.palette.neutro400};
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.palette.neutro400} 0%,
        ${({ theme }) => theme.palette.neutro300} 10%,
        ${({ theme }) => theme.palette.neutro300} 20%,
        ${({ theme }) => theme.palette.neutro400} 30%,
        ${({ theme }) => theme.palette.neutro400} 100%
      );
      background-size: 400% 400%;
      animation: ${shine} 6s linear infinite;
    }

    .col,
    .title,
    .note,
    .paragraph {
      border-radius: ${space(0.5)};
      width: 100%;
    }

    .col,
    .note,
    .paragraph {
      height: ${space(0.25)};
      opacity: 0.4;
    }

    .note,
    .paragraph {
      margin: 0 0 ${space(0.25)};
    }

    .avatar  {
      padding: 0 ${space(0.5)} 0 0;
      width: ${space(2)};

      &::before {
        border-radius: 50%;
        content: "";
        display: block;
        height: ${space(1.5)};
        opacity: 0.4;
        width: ${space(1.5)};
      }
    }

    .figure {
      margin: 0 0 ${space(0.5)} 0;
      width: ${space(3)};

      &::before {
        border-radius: 5px;
        content: "";
        display: block;
        height: ${space(2.25)};
        opacity: 0.4;
        width: ${space(3)};
      }

      &.figure-small {
        width: ${space(2)};

        &::before {
          height: ${space(1.5)};
          width: ${space(2)};
        }
      }
    }

    .content {
      width: 100%;
    }

    .cols {
      display: flex;

      > *:last-child {
        margin: 0;
      }
    }

    .col {
      margin: 0 ${space(0.25)} 0 0;
    }

    .title {
      height: ${space(0.5)};
      margin: 0 0 ${space(0.35)};
      opacity: 0.55;
    }

    .note {
      opacity: 0.25;
    }

    .small {
      width: 50%;
    }
    .smaller {
      width: 25%;
    }
  }
`;

export default ShellApp;
