function toggle(node_link, sc_id  ) {
  var node_sc = document.getElementById( sc_id );
    if( node_sc ) { 
      if( node_sc.style.display == "none" )
        node_sc.style.display = "block";
      else if( node_sc.style.display == "block")
        node_sc.style.display = "none";
      else
        node_sc.style.display = "block";
    } else 
      alert("Id not found");
}