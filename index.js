const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e4902ee446mshb4f0aa38d2ab799p105182jsn0d2cf513d531',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};
let data;
  async function getdata(){
    try{
        let res=await fetch ('https://cricbuzz-cricket.p.rapidapi.com/news/v1/index', options);
        let res2=await res.json();
        data=res2.storyList;
        console.log(data);
        append(data)

    }catch(err){
        console.log(err)
    }
  }
getdata();


    function append(data){
      let cont=document.getElementById("ni_cont");
cont.innerHTML=null;
      data.forEach(async (el)=>{
        if(el.story){

          let card=document.createElement("div");
          card.id="ni_news_content";
          let div1=document.createElement("div");
          let div2=document.createElement("div");

          let context=document.createElement("p");
          context.innerText=el.story.context;
          let hline=document.createElement("h2");
          hline.innerText=el.story.hline;
          let intro=document.createElement("p");
          intro.innerText=el.story.intro;
          
          let Iurl= await getimage(el.story.imageId);
          // console.log(Iurl);
          let img= document.createElement("img");
          img.src=Iurl;
          div1.append(img);
          div2.append(context,hline,intro);
          card.append(div1,div2);
          cont.append(card);
        }

        
      })
    }
   
    

    async function getimage(id){
      try{
          let res=await fetch (`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${id}/i.jpg`, options);
          let data= res;
          // data=res2.storyList;
          console.log(data.url);
          return data.url;
          // append(data)
  
      }catch(err){
          console.log(err)
      }
    }
   
    
      async function getdataLP(){
        try{
            let res=await fetch ('https://cricbuzz-cricket.p.rapidapi.com/photos/v1/index', options);
            let data=await res.json();
            
            console.log(data.photoGalleryInfoList);
            appendLP(data.photoGalleryInfoList)
    
        }catch(err){
            console.log(err)
        }
      }
      getdataLP();

      function appendLP(data){
        let cont=document.getElementById("ni_lphoto");
  cont.innerHTML=null;
        data.forEach((el)=>{
          if(el.photoGalleryInfo){

            let card=document.createElement("div");
            card.id="ni_LP";
            
            let hline=document.createElement("p");
            hline.innerText=el.photoGalleryInfo.headline;
            
            
            // let Iurl=  getimage(el.story.imageId);
            // // console.log(Iurl);
            // let img= document.createElement("img");
            // img.src=Iurl;
            card.append(hline);
            cont.append(card);
          }
        })
          
  
         
  
          
      
      }