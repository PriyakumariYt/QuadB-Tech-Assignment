import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, editItem, deleteAllItems } from '../redux/todo/todoSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const TodoList = () => {
  const [inputData, setInputData] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todo.items);

  const taskAdd = () => {
    if (inputData) {
      dispatch(addItem(inputData));
      setInputData('');
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(items[index]);
  };

  const handleUpdate = () => {
    if (editIndex !== -1) {
      dispatch(editItem({ index: editIndex, value: editValue }));
      setEditIndex(-1);
      setEditValue('');
    }
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllItems());
  };

  return (
    <div className="container">
      <div className="TodoList">
        <h1>TodoList</h1>
        <div className="row">
          <input
            type="text"
            id="input-box"
            placeholder="Text Message"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className="btn" onClick={taskAdd}>ADD</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <div className="xmark" key={index}>
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button className="btns" onClick={handleUpdate}>
                    <CheckBoxIcon />
                  </button>
                </div>
              ) : (
                <>
                  <li>{item}</li>
                  <button className="btns" onClick={() => handleDelete(index)}>
                    <DeleteForeverIcon />
                  </button>
                  <button className="btns" onClick={() => handleEdit(index)}>
                    <EditIcon />
                  </button>
                </>
              )}
            </div>
          ))}
        </ul>
        <button className="btn" style={{ display: 'flex', margin: 'auto', justifyContent: 'center' }} onClick={handleDeleteAll}>
          Delete All Items
        </button>
      </div>
    </div>
  );
};

export default TodoList;
