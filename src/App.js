import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BlogItem from './blogCard';
import { isArrayEmpty as checkEmptyArray, isArrayEmpty } from './utils';

class App extends Component {
  state = {
    showBlogs : true,
    blogArr : [{
      id:1,
      title: 'Blog 1',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
      likeCount:0 },
      {id:2,
        title: 'Blog 2',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
      likeCount:0},
      {
        id:3,
        title: 'Blog 3',
        description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount:0  
      }]
  }
  
  blogObj ={
  title: 'Blog',
  description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor',
  likeCount:0 };

 

  onLikeBtnClick = (pos) =>{
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObject = updatedBlogList[pos];

    updatedBlogObject.likeCount = updatedBlogObject.likeCount +1;
    updatedBlogList[pos] = updatedBlogObject;

    this.setState({blogArr: updatedBlogList});

    console.log(updatedBlogObject)
  }

  
  

   onHideBtnClick = ()=>{
    let updatedState = !this.state.showBlogs;
   this.setState((prevState, prevProps) =>{
    return {showBlogs: !prevState.showBlogs}
   });

   console.log(this.showBlogs);
  }
render(){
  const blogCards = checkEmptyArray(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos)=>{
   
    return (
      <BlogItem className={'Blog'} key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id} onLikeBtnClick={()=>this.onLikeBtnClick(pos)} position={pos}/>
  //   <div className="blogCard" key={item.id}>
  //   <h3>{blogObj.title}</h3>
  //   <p>{blogObj.description}</p>
  // </div>
  )

  })

  console.log(this.state);
  console.log("Render Called");
  return (

    <div className="App">
      <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
      <br></br>
   {
   this.state.showBlogs ?  blogCards : null
   }
    </div>
  );
}
}

export default App;
