import React from 'react';
import "./Widget.css"

const Widget = (props) => {
  return (
    <div>
    	<iframe 
    	src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnba%2F&tabs=timeline&width=350px&height=1000px&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
    	width="400" 
    	height="800" 
    	style={{border:"none",overflow:"hidden"}} 
    	scrolling="no" 
    	frameborder="0" 
    	allowTransparency="true" 
    	allow="encrypted-media"/>
    </div>
  )
}

export default Widget;