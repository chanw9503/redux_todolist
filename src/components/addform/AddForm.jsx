import './style.css';

function AddForm() {
  return (
    <form className="addform">
      <div className="context_container">
        <label>
          <strong>제목</strong>
        </label>
        <input className="inputBox" required type="text" />
        <label>
          <strong>내용</strong>
        </label>
        <input className="inputBox" required type="text"></input>
      </div>
      <div className="buttonBox">
        <button className="addTodo" type="submit">
          추가하기
        </button>
      </div>
    </form>
  );
}

export default AddForm;
