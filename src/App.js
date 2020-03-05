import React, { Component } from 'react';

class Contents extends Component {
  render() {
    return (
      <article>
          <h2>{this.props.data.title}</h2>
          {this.props.data.desc}
      </article>
    );
  }
}

// property => props
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    var list = [
      <li><a href="1.html">HTML</a></li>,
      <li><a href="2.html">CSS</a></li>,
      <li><a href="3.html">JavaScript</a></li>
    ];
    var list = [];
    var i = 0;
    while(i < this.props.data.length){
      var data = this.props.data[i];
      list.push(
        <li key={data.id}>
          <a href={data.id+'.html'} onClick={function(ev){
            ev.preventDefault() // a 태그의 기본(Default) 기능인 페이지 이동을 금지하다(prevent)
          }}>
            {data.title}
          </a>
        </li>
      );
      i = i + 1;
    }
    
    return (
      <nav>
        <ol>
          {list}
        </ol>
      </nav>
    );
  }
}

class App extends Component {
  state = {
    selected_content_id:3,
    contents:[
      {id:1, title: 'HTML', desc: 'HTML is for infomation'},
      {id:2, title: 'CSS', desc: 'CSS is for design'},
      {id:3, title: 'JavaScript', desc: 'JavaScript is for interation'}
    ]
  }
  getSelectedContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(this.state.selected_content_id === data.id){
        return data;
      }
      i = i + 1;
    }
  }
  render() {
    // console.log(this.getSelectedContent()); # getSelectContent() 메소드가 인자값을 잘 받고 있는지를 consol.log()를 통해 확인
    return (
      <div className="App">
        <Subject title="WEB" sub="World wide web"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Contents data={this.getSelectedContent()}></Contents>

      </div>
    )
  }
}

export default App;