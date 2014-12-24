var element, element1, element2;
var user = 1, user1 = 1, user2 = 1;
var rn;
var flg = 1;

function fun()
{
	var element = document.getElementById(20);
	//element.innerHTML = " <div class='noone' > <font size=5 >HELLO</font>  </div> ";
	if (temp == 1) {
		element.innerHTML = " <div class='noone' style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:50 left:0 height=42 width=42/> <img src=red.gif style=position:absolute; top:0; left:0; height=42 width=42/></div> ";
		
		temp++;
		setTimeout(fun, 1000);
	} else if (temp == 2) {
		element.innerHTML = " <div > hello </div> ";
		temp++;
	} else {
		return;
	}
}

function gameStart()
{
	document.getElementById("btn").disabled = true;
	document.getElementById("btn").style.color = "black";
	rn = Math.random() * 10;
	rn = Math.ceil(rn);
	rn = rn % 6;
	rn = rn + 1;
	
	if (user == 1) {
		playUser1();
	} else {
		playUser2();
	}
}
 
function init()
{
	if (flg == 1) {
		flg = 0;
		element = document.getElementById(1);
		element.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";

		document.getElementById("btn").innerHTML="USER 1 CHANCE";
		document.getElementById("btn").style.color = "green";
		document.getElementById("btn").style.fontFamily="Impact,Charcoal,sans-serif";
		document.getElementById("btn").style.fontSize="3em";
	} else {
		gameStart();
	}
}

function playUser1()
{
	element = document.getElementById(user1);
	
	if (user1+rn > 100) {
		if(user == 1) user = 2;
		else user = 1;
		fun();	
	} else {
		if (user1 == user2) {
			var img = "<img src=red.gif>";
			element.innerHTML = " <div style=position:relative; left:0; top:0;>" + img + "  </div> ";
		} else {
			element.innerHTML = "";
	
		} 
		if (user1+rn <= 100) {
			var img = 'green.gif';
			increment(user1, user2, img, 1);
		}
	}
}

function playUser2()
{
	element = document.getElementById(user2);
	
	if (user2+rn > 100) {
		if(user == 1) user = 2;
		else user = 1;
		fun();
		
	} else { 
		if (user1 == user2) {
			var img = "<img src=green.gif>";
			element.innerHTML = " <div style=position:relative; left:0; top:0;>" + img + "  </div> ";
		} else {
			element.innerHTML = "";
		}
		
		if (user2+rn <= 100) {
			var img = 'red.gif';
			increment(user2, user1, img, 1);
		}
	}
}

function fun()
{
	if (user == 1) {
		document.getElementById("btn").innerHTML="USER 1 CHANCE";
		document.getElementById("btn").style.color = "green";
		document.getElementById("btn").style.fontFamily="Impact,Charcoal,sans-serif";
		document.getElementById("btn").style.fontSize="3em";
		document.getElementById("btn").disabled = false;
	} else {
		document.getElementById("btn").innerHTML="USER 2 CHANCE";
		document.getElementById("btn").style.color = "red";
		document.getElementById("btn").style.fontFamily="Impact,Charcoal,sans-serif";
		document.getElementById("btn").style.fontSize="3em";
		document.getElementById("btn").disabled = false;
	}
	if (user1 == 100) {
		alert('USER1 WINS');
		document.getElementById("btn").style.color = "green";
		document.getElementById("btn").innerHTML="USER 1 WINS";
		document.getElementById("btn").disabled = true;
	} else if (user2 == 100) {
		alert('USER2 WINS');
		document.getElementById("btn").style.color = "red";
		document.getElementById("btn").innerHTML="USER 2 WINS";
		document.getElementById("btn").disabled = true;
	}
}

function update_info()
{
	if (user == 1) {
		user1 += rn;
		user = 2;
	} else {
		user2 += rn;
		user = 1;
	}
}

function checkLadder()
{
	if (user == 2) {
		if (user1 == 4) ladder4('green.gif', 2);
		else if (user1 == 8) ladder8('green.gif', 1);
		else if (user1 == 25) ladder25('green.gif', 2);
		else if (user1 == 22) ladder22('green.gif', 1);
		else if (user1 == 30) ladder30('green.gif', 1);
		else if (user1 == 44) ladder44('green.gif', 1);
		else if (user1 == 49) ladder49('green.gif', 1);
		else if (user1 == 60) ladder60('green.gif', 1);
		else if (user1 == 72) ladder72('green.gif', 1);
		else if (user1 == 85) ladder85('green.gif', 1);
		else if (user1 == 15) snake15('green.gif', 1);
		else if (user1 == 32) snake32('green.gif', 1);
		else if (user1 == 35) snake35('green.gif', 1);
		else if (user1 == 38) snake38('green.gif', 1);
		else if (user1 == 58) snake58('green.gif', 1);
		else if (user1 == 65) snake65('green.gif', 1);
		else if (user1 == 81) snake81('green.gif', 1);
		else if (user1 == 90) snake90('green.gif', 1);
		else if (user1 == 94) snake94('green.gif', 1);
		else if (user1 == 98) snake98('green.gif', 1);
		else fun();
		
	} else if (user == 1) {
		if (user2 == 4) ladder4('red.gif', 2);
		else if (user2 == 8) ladder8('red.gif', 1);
		else if (user2 == 25) ladder25('red.gif', 2);
		else if (user2 == 22) ladder22('red.gif', 1);
		else if (user2 == 30) ladder30('red.gif', 1);
		else if (user2 == 44) ladder44('red.gif', 1);
		else if (user2 == 49) ladder49('red.gif', 1);
		else if (user2 == 60) ladder60('red.gif', 1);
		else if (user2 == 72) ladder72('red.gif', 1);
		else if (user2 == 85) ladder85('red.gif', 1);
		else if (user2 == 15) snake15('red.gif', 1);
		else if (user2 == 32) snake32('red.gif', 1);
		else if (user2 == 35) snake35('red.gif', 1);
		else if (user2 == 38) snake38('red.gif', 1);
		else if (user2 == 58) snake58('red.gif', 1);
		else if (user2 == 65) snake65('red.gif', 1);
		else if (user2 == 81) snake81('red.gif', 1);
		else if (user2 == 90) snake90('red.gif', 1);
		else if (user2 == 94) snake90('red.gif', 1);
		else if (user2 == 98) snake98('red.gif', 1);
		else fun();
	}
}

function increment(usr, otherusr, img, temp) 
{
	if (temp > rn) {
		update_info();
		checkLadder();
		return;
	}
	if (usr+temp == 100) {
		alert(usr + '  wins');
	}
	if (temp == 1) {
		element2 = document.getElementById(usr+temp);
		
		if (usr+temp == otherusr) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			if (img == 'green.gif') {
				var img1 = "<img src=" + img + ">";
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img1 + "  </div> ";
			} else {
				var img1 = "<img src=" + img + ">";
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img1 + "  </div> ";
			}
		}
		
		element1 = element2;
		
		setTimeout(increment, 1000, usr, otherusr, img, temp+1);
	} else {
		if (usr+temp-1 == otherusr) {
			if (user == 1) {
				element1.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; > <img src=red.gif>  </div> ";
			} else {
				element1.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; > <img src=green.gif>  </div> ";
			}
		} else {
			element1.innerHTML = "";
		}
		
		
		element2 = document.getElementById(usr+temp);
		if (usr+temp == otherusr) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0/></div> ";
		} else {
			if (img == 'green.gif') {
				var img1 = "<img src=" + img + ">";
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img1 + "  </div> ";
			} else {
				var img1 = "<img src=" + img + ">";
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img1 + "  </div> ";
			}
		}
		element1 = element2;
		
		setTimeout(increment, 1000, usr, otherusr, img, temp+1);
	}	
}

function ladder4(player, temp)
{
	if (player == 'green.gif') {
		if(temp == 1) {
			element2 = document.getElementById(4);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder4g_4' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			
			element1 = element2;
			
			setTimeout(ladder4, 1000, player, temp+1);
		
		} else if (temp == 2) {
			element1.innerHTML = "";
			
			element2 = document.getElementById(17);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder4g_17' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			
			element1 = element2;
			
			setTimeout(ladder4, 1000, player, temp+1);
			
		} else if (temp == 3) {
			if (player == 'green.gif') user1 = 24;
			else user2 = 24;
			
			element1.innerHTML = "";
			
			element2 = document.getElementById(24);
			
			if (user1 == user2) {
				element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
			} else {
				var img = "<img src=" + player + ">"; 
				element2.innerHTML = " <div class='ladder4g_24' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
			fun();
		}
	} else if (player == 'red.gif') {
		if(temp == 1) {
			element2 = document.getElementById(4);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder4r_4' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			
			element1 = element2;
			
			setTimeout(ladder4, 1000, player, temp+1);
		
		} else if (temp == 2) {
			element1.innerHTML = "";
			
			element2 = document.getElementById(17);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder4r_17' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			
			element1 = element2;
			
			setTimeout(ladder4, 1000, player, temp+1);
			
		} else if (temp == 3) {
			if (player == 'green.gif') user1 = 24;
			else user2 = 24;
			
			element1.innerHTML = "";
			
			element2 = document.getElementById(24);
			
			if (user1 == user2) {
				element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
			} else {
				var img = "<img src=" + player + ">"; 
				element2.innerHTML = " <div class='ladder4r_24' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
			fun();
		}
	}
}

function ladder25(player, temp)
{
	if (player == 'green.gif') {
		if(temp == 1) {
			element2 = document.getElementById(25);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder25g_25' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			
			element1 = element2;
			
			setTimeout(ladder25, 1000, player, temp+1);
		
		} else if (temp == 2) {
			element1.innerHTML = "";
			
			element2 = document.getElementById(35);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder25g_35' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			
			element1 = element2;
			
			setTimeout(ladder25, 1000, player, temp+1);
			
		} else if (temp == 3) {
			element1.innerHTML = "";
			
			element2 = document.getElementById(46);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder25g_46' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
			element1 = element2;
			
			setTimeout(ladder25, 1000, player, temp+1);
			
		} else if (temp == 4) {
			element1.innerHTML = " <";
			
			element2 = document.getElementById(54);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder25g_54' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			
			element1 = element2;
			
			setTimeout(ladder25, 1000, player, temp+1);
			
		} else if (temp == 5) {
			element1.innerHTML = "";
			
			element2 = document.getElementById(67);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder25g_67' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
			element1 = element2;
			
			setTimeout(ladder25, 1000, player, temp+1);
			
		} else if (temp == 6) {
			if (player == 'green.gif') user1 = 73;
			else user2 = 73;
			
			element1.innerHTML = "";
			
			element2 = document.getElementById(73);
			if (user1 == user2) {
				element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
			} else {
				var img = "<img src=" + player + ">"; 
				element2.innerHTML = " <div class='ladder25g_73' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
			fun();
		}
	} else if (player == 'red.gif') {
		if(temp == 1) {
			element2 = document.getElementById(25);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder25r_25' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			
			element1 = element2;
			
			setTimeout(ladder25, 1000, player, temp+1);
		
		} else if (temp == 2) {
			element1.innerHTML = "";
			
			element2 = document.getElementById(35);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder25g_35' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			
			element1 = element2;
			
			setTimeout(ladder25, 1000, player, temp+1);
			
		} else if (temp == 3) {
			element1.innerHTML = "";
			
			element2 = document.getElementById(46);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder25g_46' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
			element1 = element2;
			
			setTimeout(ladder25, 1000, player, temp+1);
			
		} else if (temp == 4) {
			element1.innerHTML = "";
			
			element2 = document.getElementById(54);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder25g_54' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			
			element1 = element2;
			
			setTimeout(ladder25, 1000, player, temp+1);
			
		} else if (temp == 5) {
			element1.innerHTML = " ";
			
			element2 = document.getElementById(67);
			var img = "<img src=" + player + ">"; 
			element2.innerHTML = " <div class='ladder25g_67' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
			element1 = element2;
			
			setTimeout(ladder25, 1000, player, temp+1);
			
		} else if (temp == 6) {
			if (player == 'green.gif') user1 = 73;
			else user2 = 73;
			
			element1.innerHTML = "";
			
			element2 = document.getElementById(73);
			if (user1 == user2) {
				element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
			}  else {
				var img = "<img src=" + player + ">"; 
				element2.innerHTML = " <div class='ladder25r_73' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
			fun();
		}
	}
}

function ladder22(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(22);
		element2.innerHTML = "";
		
		element2 = document.getElementById(39);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder22_39' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(ladder22, 1000, player, temp+1);
	
	} else if (temp == 2) {
		if (player == 'green.gif') user1 = 42;
		else user2 = 42;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(42);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;
		fun();
	} 
}

function ladder8(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(8);
		element2.innerHTML = "";
		
		element2 = document.getElementById(13);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder8_13' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(ladder8, 1000, player, temp+1);
	
	} else if (temp == 2) {
		element1.innerHTML = "";
		
		element2 = document.getElementById(27);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder8_27' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;

		setTimeout(ladder8, 1000, player, temp+1);
		
	} else if (temp == 3) {
		if (player == 'green.gif') user1 = 34;
		else user2 = 34;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(34);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;	
		fun();
	}
}

function ladder30(player, temp)
{ 
	if (temp == 1) {
		if (player == 'green.gif') user1 = 31;
		else user2 = 31;
		
		element1 = document.getElementById(30);
		element1.innerHTML = "";
		
		element2 = document.getElementById(31);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;	
		fun();
		
	} 
}

function ladder44(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(44);
		element2.innerHTML = "";
		
		element2 = document.getElementById(57);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder44_57' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(ladder44, 1000, player, temp+1);
	
	} else if (temp == 2) {
		element1.innerHTML = "";
		
		element2 = document.getElementById(63);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder44_63' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;

		setTimeout(ladder44, 1000, player, temp+1);
		
	} else if (temp == 3) {
		if (player == 'green.gif') user1 = 78;
		else user2 = 78;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(78);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;	
		fun();
	}
}

function ladder49(player, temp)
{ 
	if (temp == 1) {
		if (player == 'green.gif') user1 = 53;
		else user2 = 53;
		
		element1 = document.getElementById(49);
		element1.innerHTML = "";
		
		element2 = document.getElementById(53);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;	
		fun();
	} 
}

function ladder60(player, temp)
{ 
	if (temp == 1) {
		if (player == 'green.gif') user1 = 61;
		else user2 = 61;
		
		element1 = document.getElementById(60);
		element1.innerHTML = "";
		
		element2 = document.getElementById(61);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;	
		fun();
	} 
}

function ladder72(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(72);
		element2.innerHTML = "";
		
		element2 = document.getElementById(89);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder72_89' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(ladder72, 1000, player, temp+1);
	
	} else if (temp == 2) {
		if (player == 'green.gif') user1 = 93;
		else user2 = 93;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(93);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;	
		fun();
	} 
}

function ladder85(player, temp)
{ 
	if (temp == 1) {
		if (player == 'green.gif') user1 = 96;
		else user2 = 96;
		
		element1 = document.getElementById(85);
		element1.innerHTML = "";
		
		element2 = document.getElementById(96);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;
		fun();		
	} 
}

function snake15(player, temp)
{
	if (temp == 1) {
		if (player == 'green.gif') user1 = 5;
		else user2 = 5;
		
		element1 = document.getElementById(15);
		element1.innerHTML = "";
		
		element2 = document.getElementById(5);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;
		fun();
	}
}

function snake32(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(32);
		element2.innerHTML = "";
		
		element2 = document.getElementById(29);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder32_29' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(snake32, 1000, player, temp+1);
	
	} else if (temp == 2) {
		element1.innerHTML = "";
		
		element2 = document.getElementById(12);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder32_12' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;

		setTimeout(snake32, 1000, player, temp+1);
		
	} else if (temp == 3) {
		if (player == 'green.gif') user1 = 9;
		else user2 = 9;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(9);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;
		fun();
	}
}

function snake35(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(35);
		element2.innerHTML = "";
		
		element2 = document.getElementById(25);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder35_25' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(snake35, 1000, player, temp+1);
	
	} else if (temp == 2) {
		element1.innerHTML = "";
		
		element2 = document.getElementById(24);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder35_24' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;

		setTimeout(snake35, 1000, player, temp+1);
		
	} else if (temp == 3) {
		if (player == 'green.gif') user1 = 18;
		else user2 = 18;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(18);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;	
		fun();
	}
}

function snake38(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(38);
		element2.innerHTML = "";
		
		element2 = document.getElementById(22);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder38_22' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(snake38, 1000, player, temp+1);
	
	} else if (temp == 2) {
		if (player == 'green.gif') user1 = 20;
		else user2 = 20;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(20);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;
		fun();
	}
}

function snake58(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(58);
		element2.innerHTML = "";
		
		element2 = document.getElementById(42);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder38_22' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(snake58, 1000, player, temp+1);
	
	} else if (temp == 2) {
		if (player == 'green.gif') user1 = 41;
		else user2 = 41;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(41);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;
		fun();
	}
}

function snake65(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(65);
		element2.innerHTML = "";
		
		element2 = document.getElementById(56);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder65_56' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(snake65, 1000, player, temp+1);
	
	} else if (temp == 2) {
		element1.innerHTML = "";
		
		element2 = document.getElementById(46);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder65_46' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;

		setTimeout(snake65, 1000, player, temp+1);
		
	} else if (temp == 3) {
		element1.innerHTML = "";
		
		element2 = document.getElementById(35);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder65_35' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;

		setTimeout(snake65, 1000, player, temp+1);
		
	} else if (temp == 4) {
		if (player == 'green.gif') user1 = 26;
		else user2 = 26;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(26);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;	
		fun();
	}
}

function snake81(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(81);
		element2.innerHTML = "";
		
		element2 = document.getElementById(79);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder81_79' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(snake81, 1000, player, temp+1);
	
	} else if (temp == 2) {
		if (player == 'green.gif') user1 = 63;
		else user2 = 63;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(63);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;
		fun();
	}
}

function snake90(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(90);
		element2.innerHTML = "";
		
		element2 = document.getElementById(72);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder90_72' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(snake90, 1000, player, temp+1);
	
	} else if (temp == 2) {
		if (player == 'green.gif') user1 = 69;
		else user2 = 69;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(69);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;	
		fun();
	}
}

function snake94(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(94);
		element2.innerHTML = "";
		
		element2 = document.getElementById(87);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder94_87' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(snake94, 1000, player, temp+1);
	
	} else if (temp == 2) {
		element1.innerHTML = "";
		
		element2 = document.getElementById(73);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder94_73' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;

		setTimeout(snake94, 1000, player, temp+1);
		
	} else if (temp == 3) {
		element1.innerHTML = "";
		
		element2 = document.getElementById(68);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder94_68' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;

		setTimeout(snake94, 1000, player, temp+1);
		
	} else if (temp == 4) {
		element1.innerHTML = "";
		
		element2 = document.getElementById(53);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder94_53' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;

		setTimeout(snake94, 1000, player, temp+1);
		
	} else if (temp == 5) {
		element1.innerHTML = "";
		
		element2 = document.getElementById(48);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder94_48' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;

		setTimeout(snake94, 1000, player, temp+1);
		
	} else if (temp == 6) {
		if (player == 'green.gif') user1 = 33;
		else user2 = 33;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(33);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;	
		fun();
	}
}

function snake98(player, temp)
{ 
	if(temp == 1) {
		element2 = document.getElementById(98);
		element2.innerHTML = "";
		
		element2 = document.getElementById(83);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder98_83' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;
		
		setTimeout(snake98, 1000, player, temp+1);
	
	} else if (temp == 2) {
		element1.innerHTML = "";
		
		element2 = document.getElementById(77);
		var img = "<img src=" + player + ">"; 
		element2.innerHTML = " <div class='ladder98_77' style=position:relative; left:0; top:0; >" + img + "  </div> ";
		
		element1 = element2;

		setTimeout(snake98, 1000, player, temp+1);
		
	} else if (temp == 3) {
		if (player == 'green.gif') user1 = 64;
		else user2 = 64;
		
		element1.innerHTML = "";
		
		element2 = document.getElementById(64);
		if (user1 == user2) {
			element2.innerHTML = "<div style=position:relative; left:0; top:0;> <img src=green.gif style=position:relative; top:0 left:0/> <img src=red.gif style=position:absolute; top:0 left:0 /></div> ";
		} else {
			var img = "<img src=" + player + ">"; 
			if (player == 'green.gif') {
				element2.innerHTML = " <div class='greenn' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			} else {
				element2.innerHTML = " <div class='redd' style=position:relative; left:0; top:0; >" + img + "  </div> ";
			}
		}
		element1 = element2;
		fun();
	}
}
