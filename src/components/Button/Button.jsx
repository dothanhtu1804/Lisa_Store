import styled from "styled-components";

const ButtonStyled = styled.div`
  button {
    display: flex;
    gap: 11px;
    border: none;
    align-items: center;
    background: none;
  }

  button:hover {
    color: #ff6f61;
  }

  .small-button,
  .large-button,
  .collection-button {
    button {
      background-color: #1e2832;
      padding: 12px 15px;
    }

    button:hover {
      background-color: #ff6f61;
    }

    span {
      font-size: 20px;
      font-weight: 400;
      line-height: 34px;
      color: #ffffff;
    }
  }

  .small-button {
    button {
      padding: 0px 10px;
    }

    button:hover {
      background-color: #ff6f61;
    }

    span {
      font-size: 12px;
    }
  }

  .large-button {
    button {
      padding: 12px 15px;
      color: #ffffff;
    }

    span {
      font-family: "Roboto";
      font-size: 20px;
    }
  }

  .collection-button {
    button {
      padding: 12px 15px;
      background-color: #ffffff;
    }

    span {
      font-family: "Roboto";
      font-size: 20px;
      color: #1e2832;
    }
  }

  img {
    width: 16px;
    height: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    width: fit-content;
  }
`;
export const Button = ({ url, name_button, type }) => {
  const className = `${type}-button`;
  return (
    <ButtonStyled url={url} name_button={name_button}>
      <div className={className}>
        <button>
          {url ? <img src={url} alt="" /> : ""}
          <span>{name_button}</span>
        </button>
      </div>
    </ButtonStyled>
  );
};
