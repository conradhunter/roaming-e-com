import React from "react";
import StackGrid from "react-stack-grid";

function Media() {
  return (
    <main>
      <StackGrid columnWidth={250}>
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
        <div key="key4">Item 4</div>
        <div key="key5">Item 5</div>
        <div key="key6">Item 6</div>
        <div key="key7">Item 7</div>
        <div key="key8">Item 8</div>
        <div key="key9">Item 9</div>
        <div key="key10">Item 10</div>
        <div key="key11">Item 11</div>
        <div key="key12">Item 12</div>
        <div key="key13">Item 13</div>
      </StackGrid>
    </main>
  );
}

export default Media;
