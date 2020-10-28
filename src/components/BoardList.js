import React, {useEffect, useState} from 'react'
import Board from './Board'
import { Row} from "antd";
import AddBoard from './AddBoard';
function BoardList() {

    const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch("https://api-003.herokuapp.com/boards")
			.then((response) => response.json())
			.then((data) => {
                console.log(data);
				setPosts(data); // new
			})
    }, []);
    

    return (
        <Row className="boardlist" gutter={16}>
            <AddBoard/>
            {posts.map((item) => (
				<Board key={item.board_id} board_id={item.board_id} name={item.name} numcards={item.numcards}>
				</Board>
			))}
        </Row>
    )
}

export default BoardList
