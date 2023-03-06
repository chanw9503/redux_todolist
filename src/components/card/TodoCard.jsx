import './style.css';

function ToDoCard() {
  return (
    <div className="toDoBox">
      <div className="subject">리액트 공부하기</div>
      <div className="content">리액트 기초를 공부해봅시다.</div>
      <div className="toDoBtnBox">
        <button className="deleteBtn">삭제하기</button>
        <button className="completeBtn">완료</button>
      </div>
    </div>
  );
}

export default ToDoCard;
