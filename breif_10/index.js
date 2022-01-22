var myData;

function getData(){
    $.ajax({
        url: "index.json", 
        success: function(data){
            myData = data;
            fill(myData)

            // console.log(data[0].désignation);
        }
    })
}
getData();

function fill(pr){
    pr.forEach(element => {
            var fourn_info = element.fournisseur["company"] +'<br>'+ element.fournisseur["Adresse"];
            $('#Tbody').append($('<tr>')
            .append($('<td>').append(element.id))
            .append($('<td>').append(element.name))
            .append($('<td>').append(element.désignation)) 
            .append($('<td>').append(element.prix)) 
            .append($('<td>').append(element.catégorie)) 
            .append($('<td>').append(element.disponibilité))  
            .append($('<td>').append(fourn_info)) 
            )});
}
$(document).ready(function(){
    $("#inp3").on("keyup",function(){
        var value =$(this).val().toLowerCase();
        $("#Tbody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)

        });
    });
    })
    
    //sorting
    function sortString(a, direction){
      if(direction == "desc"){
          myData.sort(function(w,y){
              if(w[a].toLowerCase() > y[a].toLowerCase()){
                return -1;
              }
          })
      }
      else if(direction == "asc"){
          myData.sort(function(w,y){
              if(w[a].toLowerCase() < y[a].toLowerCase()){
                return -1;
              }
          })         
      }
      $('#Tbody').html("")
      fill(myData)
  }
  function sortNumber(a, direction){
    if(direction == "desc"){
        myData.sort(function(w,y){
            if(w[a] - y[a]){
              return -1;
            }
        })
    }
    else if(direction == "asc"){
        myData.sort(function(w,y){
            if(y[a] - w[a]){
              return -1;
            }
        })         
    }
    $('#Tbody').html("")
    fill(myData)
}