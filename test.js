window.onload = function(){
  Main();
}
function Main()
{
var repo_link_formatter = function(value, data, cell, row, options, formatterParams){
  console.log(data);
  return "<a href=\""+"http://www.google.co.jp"+"\">"+data["name"]+"</a>";
  //return "<a href=\""+data["name"]+"\">"+data["name"]+"</a>";
}

$("#RepositoryList").tabulator({
    height:"320px", // set height of table (optional)
    fitColumns:true, //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        {title:"Name", field:"name", sorter:"string", width:150, formatter: repo_link_formatter},
        {title:"Age", field:"age", sorter:"number", align:"left", formatter:"progress"},
        {title:"Favourite Color", field:"col", sorter:"string", sortable:false},
        {title:"Date Of Birth", field:"dob", sorter:"date", align:"center"},
    ],
    rowClick:function(e, id, data, row){ //trigger an alert message when the row is clicked
        alert("Row " + id + " Clicked!!!!");
    },
});


var tabledata = [
    {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
    {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
    {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
    {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
    {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
];
$("#RepositoryList").tabulator("setData", tabledata);

function setData(){
  return [
    {id:1, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"", cheese:1},
    {id:2, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982", cheese:true},
    {id:3, name:"Christine Lobowski", age:"42", height:0, col:"green", dob:"22/05/1982", cheese:"true"},
    {id:4, name:"Brendon Philips", age:"125", gender:"male", height:1, col:"orange", dob:"01/08/1980"},
    {id:5, name:"Margret Marmajuke", age:"16", gender:"female", height:5, col:"yellow", dob:"31/01/1999"},
    {id:6, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"", cheese:1},
    {id:7, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982", cheese:true},
    {id:8, name:"Christine Lobowski", age:"42", height:0, col:"green", dob:"22/05/1982", cheese:"true"},
    {id:9, name:"Brendon Philips", age:"125", gender:"male", height:1, col:"orange", dob:"01/08/1980"},
    {id:10, name:"Margret Marmajuke", age:"16", gender:"female", height:5, col:"yellow", dob:"31/01/1999"},
]
}
}
