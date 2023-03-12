import { useState } from "react";
import "../styles/chatbox.css";

function Chatbox() {
  const [sentMessage, setSentMsg] = useState("");

  const randomMessages = [
    "Nice to meet you...Can we be friend",
    "Nothing much really,what about you",
    "Tell me all about it",
    "I don't know man.I do have a great joke though.Why did the tomato turn red? Because it saw the salad dressing",
    "I don't know.My master is a pretty awesome person though",
    "You know, I never really thought about it like that. I might need to upgrade my programming to keep up with your brilliance!",
    "Hey, cut me some slack. I'm a chatbot, not a mind reader!",
    "I may be a chatbot, but I still know how to have a good time. How about you?",
    "That's all the time i had today..Nice Day"
  ];

  let handleSendingMessage = () => {
    document.querySelector(".send-msg-input").value = "";
    let sentContainer = document.createElement("div");
    let message = document.createElement("div");
    sentContainer.className = "sender-message-container";
    message.className = "sender";
    message.innerHTML = `<p>${sentMessage}</p>`;
    sentContainer.appendChild(message);
    document.querySelector(".convo-box").appendChild(sentContainer);
  };

  let handle;

  return (
    <section id="chatbox">
      <div id="nav">
        <div id="contact-details">
          <div id="contact-pfp"></div>
          <div id="contact-user-name">
            <h4>John Doe</h4>
            <h6>active</h6>
          </div>
        </div>
        <div id="chat-options">
          <i className="material-symbols-outlined">call</i>
          <i className="material-symbols-outlined">video_call</i>
          <i className="material-symbols-outlined">star</i>
        </div>
      </div>
      <div className="convo-box">
        <div className="recipient-message-container">
          <div className="recipient">
            <p>Hey there, I'm John but my friends like to call me Nathan😁</p>
          </div>
        </div>
      </div>
      <div className="send-msg-row">
        <div id="input-cont">
          <i className="material-symbols-outlined">sentiment_satisfied</i>
          <i className="material-symbols-outlined">attach_file</i>
          <input
            onChange={(e) => {
              setSentMsg(e.target.value);
            }}
            value={sentMessage}
            type="text"
            className="send-msg-input"
            placeholder="Type a message"
          />
          <i
            onClick={() => {
              handleSendingMessage();
            }}
            className="material-symbols-outlined"
          >
            send
          </i>
        </div>
      </div>
    </section>
  );
}

export default Chatbox;
