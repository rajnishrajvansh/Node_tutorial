import {createServer} from 'http';
const PORT=process.env.PORT;
const users=[
{
   id:1,name:"Rajnish Singh"
},{
    id:2,name:"Anjani Singh"
 },{
    id:3,name:"Piyush Singh"
 },

];

const server=createServer((req,res)=>{
    const url=new URL(req.url,`http://localhost:${PORT}`);
    if(url.pathname==='/api/users'&& req.method==='GET'){
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(users));
        res.end();
    }
    else if(req.url.match()){


    }
    else{
        res.setHeader('Content-Type','application/json');
        res.statusCode=404;
        res.write(JSON.stringify({message:"Route not found"}));
        res.end();
    }



});
server.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})