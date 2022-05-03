import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../firebase";

import firebase from "firebase/compat/app";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  console.log(channelId);
  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      console.log("blaah");
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Nikita Parekh",
      userImage:
        "https://media-exp1.licdn.com/dms/image/C5603AQEC07vsLsI1bA/profile-displayphoto-shrink_200_200/0/1646909593387?e=1652918400&v=beta&t=zij8UwqHmq67BMleazrixzsKJ7Y-vQnI5uA0cKq19U0",
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
