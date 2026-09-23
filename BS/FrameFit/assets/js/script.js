const frames = [
 {name:"Classic Black",type:"rectangle",file:"black-rectangle.svg",fit:"Oval · Round · Heart",desc:"A clean everyday frame with a balanced rectangular shape."},
 {name:"Crystal Round",type:"round",file:"crystal-round.svg",fit:"Square · Heart",desc:"A soft round silhouette designed to add contrast to angular faces."},
 {name:"Modern Cat-Eye",type:"cat-eye",file:"cat-eye.svg",fit:"Round · Oval · Heart",desc:"A lifted cat-eye style with a fashionable profile."},
 {name:"Golden Aviator",type:"aviator",file:"gold-aviator.svg",fit:"Square · Oval",desc:"A classic aviator-inspired shape with a lightweight visual feel."},
 {name:"Bold Tortoise",type:"rectangle",file:"tortoise.svg",fit:"Oval · Round",desc:"A statement rectangular frame with a warm patterned look."},
 {name:"Clear Minimal",type:"round",file:"clear-minimal.svg",fit:"Square · Heart · Oval",desc:"A subtle transparent style for a clean modern appearance."},
 {name:"Slim Black",type:"rectangle",file:"slim-black.svg",fit:"Oval · Round",desc:"A slim profile for an understated everyday look."},
 {name:"Soft Cat-Eye",type:"cat-eye",file:"soft-cat-eye.svg",fit:"Round · Oval",desc:"A gentle cat-eye silhouette with softly curved corners."}
];

const grid=document.getElementById("frameGrid");
const selectedName=document.getElementById("selectedName");
const selectedType=document.getElementById("selectedType");
const selectedPreview=document.getElementById("selectedPreview");
const selectedDescription=document.getElementById("selectedDescription");
const fitText=document.getElementById("fitText");
const overlay=document.getElementById("overlayFrame");

function selectFrame(frame){
 selectedName.textContent=frame.name;
 selectedType.textContent=frame.type.replace("-", " ");
 selectedDescription.textContent=frame.desc;
 fitText.textContent=frame.fit;
 selectedPreview.innerHTML=`<img src="assets/images/frames/${frame.file}" alt="${frame.name}">`;
 overlay.src=`assets/images/frames/${frame.file}`;
 overlay.style.display=document.getElementById("camera").style.display==="block"?"block":"none";
 document.getElementById("tryon").scrollIntoView({behavior:"smooth"});
}
function render(filter="all"){
 grid.innerHTML="";
 frames.filter(f=>filter==="all"||f.type===filter).forEach(f=>{
  const card=document.createElement("article");
  card.className="frame-card";
  card.innerHTML=`<div class="frame-img"><img src="assets/images/frames/${f.file}" alt="${f.name}"></div>
  <div class="frame-info"><h3>${f.name}</h3><p>${f.desc}</p><span class="tag">${f.type.replace("-"," ")}</span></div>`;
  card.onclick=()=>selectFrame(f);
  grid.appendChild(card);
 });
}
document.querySelectorAll(".filter").forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
 btn.classList.add("active");render(btn.dataset.filter);
});
render();

let stream=null;
const camera=document.getElementById("camera"), placeholder=document.getElementById("cameraPlaceholder");
document.getElementById("startCamera").onclick=async()=>{
 try{
  stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:false});
  camera.srcObject=stream;camera.style.display="block";placeholder.style.display="none";
  document.getElementById("cameraStatus").textContent="Camera active";
  overlay.style.display="block";
 }catch(e){
  document.getElementById("cameraStatus").textContent="Camera permission needed";
  alert("Please allow camera access in your browser to use Virtual Try-On.");
 }
};
document.getElementById("stopCamera").onclick=()=>{
 if(stream) stream.getTracks().forEach(t=>t.stop());
 stream=null;camera.srcObject=null;camera.style.display="none";placeholder.style.display="block";
 document.getElementById("cameraStatus").textContent="Camera stopped";overlay.style.display="none";
};
