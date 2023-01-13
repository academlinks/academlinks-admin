import styled from "styled-components";
import { nestedAside, linkHover } from "../../styles/helpers";

export const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: row;

  .notifications-aside {
    ${nestedAside}

    .notifications-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      ${linkHover({ class: ".notify-item", activeClass: ".active-notify" })};

      .notify-item {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: ${({ theme }) => theme.rounded.sm};

        &__fig {
          width: 5rem;
          height: 5rem;
          border-radius: ${({ theme }) => theme.rounded.sm};
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }

        .notify-item__details {
          width: calc(100% - 5rem - 3rem);

          .userName {
            text-transform: capitalize;
          }
        }

        .notify-options--btn {
          position: absolute;
          right: 0.35rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .notify-item--options__modal {
          position: absolute;
          right: 0;
          bottom: -1rem;
          padding: 0.5rem;
          min-width: 12rem;
          border-radius: ${({ theme }) => theme.rounded.xsm};
          border:1px solid ${({ theme }) => theme.colors.darkGray};
          background: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.darkGray};

          button {
            width: 100%;
            height: 100%;
            text-align: start;
          }
        }
      }
    }
  }

  .notifications-content {
    flex: 1;
  }
`;

export const ActiveNotificationContainer = styled.div`
  padding: 1rem 1rem 2rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  .notification-details--box {
    padding: 1rem;
  }

  .notification-message {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .userName {
      text-transform: capitalize;
    }
  }
`;
