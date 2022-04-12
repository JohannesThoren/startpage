import React from "react"
interface IProps {
}
interface IState {
}
export default class QuickAccess extends React.Component<IProps, IState> {
    render(){
        return(<>
        <div className="btns">
            <a className="btn" href="https://github.com"><i className="fa-brands fa-github"></i></a>
            <a className="btn" href="https://youtube.com"><i className="fa-brands fa-youtube"></i></a>
            <a className="btn" href="https://reddit.com"><i className="fa-brands fa-reddit"></i></a>
            <a className="btn" href="http://google.com"><i className="fa-brands fa-google"></i></a>
            <a className="btn" href="http://twitter.com"><i className="fa-brands fa-twitter"></i></a>
            <a className="btn" href="http://facebook.com"><i className="fa-brands fa-facebook"></i></a>

        </div>
        </>)
    }

}