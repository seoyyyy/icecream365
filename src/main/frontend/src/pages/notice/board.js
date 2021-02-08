import React, {useState} from 'react';
import '../../css/board.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';

function Board() {
    const [reviewContent, setReviewContent ] = useState({
        title: '',
        content: ''
    })

    //입력 누르면 빈배열에 내용을 추가해주는 기능 
const [updateContent, setUpdateContent] = useState([]);

    const getValue = e => {
        const{name, value } = e.target;
        setReviewContent({
            ...reviewContent,
            [name]:value
        })
    }

    return(
        <div className="board">
            <h1>게시판</h1>
            <div className='board-container'>
                {updateContent.map(element =>
                    <div>
                        <h2>{element.title}</h2>
                        <div>
                            {element.content}
                        </div>
                    </div>
                    )}
            </div>
            <div className='form-wrapper'>
                <input className="title-input" 
                       type='text' 
                       placeholder='제목'
                       onChange={getValue} 
                       name='title' 
                />
                <CKEditor 
                    editor={ClassicEditor}
                    data="<p>내용을 입력하세요 </p>"
                    onReady={editor =>{
                        console.log('Editor is ready to use~~', editor);
                    }}
                    onChange={(event, editor)=> {
                        const data = editor.getData();
                      
                        setReviewContent({
                        ...reviewContent,
                        content:data
                    })
                    
                    }}
                    onBlur={(event, editor) =>{
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor)=>{
                        console.log('Focus.' , editor);
                    }}
                />
                {/* <textarea className="text-area" placeholder='내용'/> */}
            </div>
            <button className="submit-button"
                    onClick={()=>{
                        setUpdateContent(updateContent.concat({...reviewContent}));
                    }
                    }>입력</button>
        </div>
    )
}

export default Board;