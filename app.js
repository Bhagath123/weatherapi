window.addEventListener('load',()=>{
    let long;
    let lat;
    let temparatureDescription=document.querySelector('.temparature-description');
    let temparatureDegree=document.querySelector('.temparature-degree');
    let locationTimeZone=document.querySelector('.location-timezone')
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy="https://cors-anywhere.herokuapp.com/"
            const api=`${proxy}https://api.darksky.net/forecast/4b580ad39e9bd7df237296e5588fe6e8/${long},${lat}`
            fetch(api).then(data=>{
               return data.json();
            }).then(data=>{
                console.log(data);
                
                const {temperature,summary,icon}=data.currently;
                temparatureDegree.textContent=temperature;
                temparatureDescription.textContent=summary;
                locationTimeZone.textContent=data.timezone;
                setIcons(icon,document.querySelector('.icon'));
            })
        })
    }
   
})

        

 