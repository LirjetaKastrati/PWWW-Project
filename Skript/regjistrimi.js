var part_1;
var part_2;

function next() 
{
    var part_1 = document.getElementById("part1");
    var part_2 = document.getElementById("part2");
    
    part_2.style.display = "block";
    part_1.style.display = "none";
    
}

function back() 
{
    var part_1 = document.getElementById("part1");
    var part_2 = document.getElementById("part2");
    
    part_2.style.display = "none";
    part_1.style.display = "block";
    
}