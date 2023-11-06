import { useState } from "react";
import "./style.css";

export const DropdownBottom = ({ faq, answer }) => {
  const [question, setQuestion] = useState(false);
  const [chevron, setChevron] = useState("fa fa-chevron-down");

  const buttonClickHandler = () => {
    setChevron((prev) =>
      prev === "fa fa-chevron-down" ? "fa fa-chevron-up" : "fa fa-chevron-down"
    );
    setQuestion((prev) => !prev);
  };
  console.log(question);
  return (
    <div className="btn-group">
      <div className="dropdown">
        <button
          onClick={buttonClickHandler}
          className="dropdown-question"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {faq}{" "}
          <i
            style={{ float: "right", paddingRight: 10 }}
            class={chevron}
            aria-hidden="true"
          ></i>
        </button>
        {question && (
          <div>
            <p className="dropdown-answer">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};
const Dropdown = ({ faq, answer }) => {
  const [question, setQuestion] = useState(false);
  const [chevron, setChevron] = useState("fa fa-chevron-down");

  const buttonClickHandler = () => {
    setChevron((prev) =>
      prev === "fa fa-chevron-down" ? "fa fa-chevron-up" : "fa fa-chevron-down"
    );
    setQuestion((prev) => !prev);
  };
  console.log(question);
  return (
    <div className="btn-group">
      <div className="dropdown">
        <button
          onClick={buttonClickHandler}
          className="dropdown-question"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="text-border-question">
            {faq}{" "}
            <i
              style={{
                float: "right",
                paddingRight: 10,
                transition: "1s",
              }}
              class={chevron}
              aria-hidden="true"
            ></i>
          </span>
        </button>
        {question && (
          <div
            style={
              question
                ? { animation: "inAnimation 1s" }
                : { animation: "outAnimation 1s" }
            }
          >
            <p className="dropdown-answer">{answer}</p>
          </div>
        )}
        <hr
          style={{
            color: "black",
            height: 1,
            width: "auto"
          }}
        />
      </div>
    </div>
  );
};

export default Dropdown;
