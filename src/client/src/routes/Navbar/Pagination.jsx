import React from 'react';
import { Link } from 'react-router-dom'

export default class Pagination extends React.Component{
    render(){
        const { total_pages, page, url } = this.props
        let current = page
        let prev = "Prev"
        let next = "Next"
        let arr = []
        for(var i = 1; i <= total_pages; i++){
            arr.push(i)
        }
        return(
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className={current === 1 ? "page-item disabled" : "page-item"}>
                            <a className="page-link" href={`${url.slice(0, url.length - 7)}&page=${page - 1}`} >{prev}</a>
                        </li>
                        {
                            arr.map(item => (
                                <li className={current === item ? "page-item active" : "page-item"} key={item}>
                                    <a className="page-link" href={`${url.slice(0, url.length - 7)}&page=${item}`} >{item}</a>
                                </li>
                            ))
                        }
                        <li className={current === arr[arr.length - 1] ? "page-item disabled" : "page-item"}>
                            <a className="page-link" href={`${url.slice(0, url.length - 7)}&page=${page + 1}`} >{next}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}