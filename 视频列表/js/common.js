/*-------------------------------------------滚动时延迟加载(公共的名字叫做oBht,有id(objs))------------------------------*/
var oBdy=$(window).height(),
	op,
	ops,
	opd,
	opsd;
if(objs){
	$(window).scroll(function() {
			var sHt = $(document).scrollTop();
			for(var e=0;e<$(".oBht").length;e++){
				if (sHt >($(".oBht").eq(e).offset().top-oBdy)) {
					/*----左边的轮播呗(排在第一个的让他图片先加载)*/
					for(var t=0;t<5;t++){
						var cdc=$(".oBht").eq(e).find(".mBoxl_b_one").eq(0).find(".mbox_in").eq(t);	
						cdc.attr(
						"src",
						cdc.attr("data-src")
						);
						}
					/*----右边的轮播呗(排在第一个的让他图片先加载)*/
						var ydc=$(".oBht").eq(e).find(".nw_zz").eq(0).find(".mbox_in").eq(0);
						ydc.attr(
						"src",
						ydc.attr("data-src")
						);
					/*-----一图-----*/
					for(var y=0;y<5;y++){
						var yt=$(".oBht").eq(e).find(".yt_box").eq(0).find(".mbox_in").eq(y);
						yt.attr(
						"src",
						yt.attr("data-src")
						)
						}
					/*----------装备&&最新内容&&(热门攻略旁边的最近文章)---------*/
					for(var v=0;v<4;v++){
						var yt6=$(".oBht").eq(e).find(".mBoxl_zb_in").eq(0).find(".mbox_in").eq(v);
						var yt7=$(".oBht").eq(e).find(".mBoxl_zxnr_in").eq(0).find(".mbox_in").eq(v);
						var yt12=$(".oBht").eq(e).find(".mBoxl_zjwz_in").eq(0).find(".mbox_in").eq(v);
						yt6.attr(
						"src",
						yt6.attr("data-src"));
						yt7.attr(
						"src",
						yt7.attr("data-src"));
						yt12.attr(
						"src",
						yt12.attr("data-src"));
					}
					/*-----鱼眼-----*/
					for(var y=0;y<4;y++){
						var yt8=$(".oBht").eq(e).find(".one_in_yan").eq(0).find(".mbox_in").eq(y);
						yt8.attr(
						"src",
						yt8.attr("data-src")
						)
						}
					/*----影像讲堂----*/
					for(var y=0;y<8;y++){
							var yt8=$(".oBht").eq(e).find(".yxjt_b_in").eq(0).find(".mbox_in").eq(y);
							yt8.attr(
							"src",
							yt8.attr("data-src")
							)
						}		
				}else{
					console.log("我也没有大于他啊")	
					}
			}
		});		
}
/*-------判断函数||这是一图的第一屏的自动轮播(零基础加上自动轮播)(并且当鼠标划上的时候停止自动轮播)-------*/
var times=null;
$(window).scroll(function() {
	clearInterval(times)
if($(document).scrollTop()>$("#nyf").offset().top-oBdy){
	op=1;
	}
	if(op===1){
		clearInterval(times);
		times=setInterval(ljcs,2000);
		}
	$("#nyf").mouseenter(function(){
			clearInterval(times);
		});
})
/*-------判断函数||这是鱼眼的第一屏的自动轮播(零基础加上自动轮播)(并且当鼠标划上的时候停止自动轮播)-------*/
var times4=null;
$(window).scroll(function() {
	clearInterval(times4)
if($(document).scrollTop()>$("#nyf6").offset().top-oBdy){
	ops=1;
	}
	if(ops===1){
		clearInterval(times4);
		times4=setInterval(sjs,2000);
		}
	$("#nyf6").mouseenter(function(){
			clearInterval(times4);
		});
})
/*-------判断函数||这是最近文章的第一屏的自动轮播-------*/
var times6=null;
$(window).scroll(function() {
	clearInterval(times6)
if($(document).scrollTop()>$("#nyf7").offset().top-oBdy){
	opd=1;
	}
	if(opd===1){
		clearInterval(times6);
		times6=setInterval(zjnm,2000);
		}
	$("#nyf7").mouseenter(function(){
			clearInterval(times6);
		});
})
/*-------判断函数||这是热门专题的第一屏的自动轮播(并且当鼠标划上的时候停止自动轮播)-------*/
var times8=null;
$(window).scroll(function() {
	clearInterval(times8)
if($(document).scrollTop()>$("#nyf8").offset().top-oBdy){
	opsd=1;
	}
	if(opsd===1){
		clearInterval(times8);
		times8=setInterval(jxs,2000);
		}
	$("#nyf8").mouseenter(function(){
			clearInterval(times8);
		});
})
/*-------------------------------------------最新内容-----------------------------------*/
new_cont();
function new_cont(){
var i=0;
var	first_show=$(".switch_new_one").eq(0).find(".first_l_p_in");
	for(var m=0;m<3;m++){
	first_show.eq(m).attr("src",first_show.eq(m).attr("data-src"));
	}
//移入停止切换
$("#new_cont").mouseover(function(){
	clearInterval(time1)
	})	
//移出事件继续切换	
$("#new_cont").mouseleave(function(){
	time1=setInterval(next_pic,200000)
	})	
//自动切换			
time1=setInterval(next_pic,200000)//每隔1s执行一次
//点击往右		
$("#nex_n").click(function(){
	next_pic()
	})
//点击往左
$("#nex_p").click(function(){
	top_pic();	
	})
//切换函数(往右)
function next_pic(){
	i++;
	var ygs=$("#switch_new_in .switch_new_one").length;
	if(i>=ygs){
		alert("要干啥")
		window.location.href='http://www.ddhbb.com'
		}
	move_l=-i*1260;
	$("#switch_new_in").css({left:move_l+'px'});
	var img_l=$(".switch_new_one").eq(i).find(".first_l_p_in");
	for(var n=0;n<img_l.length;n++){
	img_l[n].src=img_l[n].getAttribute("data-src");
	}	
}
//切换函数(往左)
function top_pic(){
	i--;
	if(i<=0){
		i=0
		}
	move_l=-i*1260;
	$("#switch_new_in").css({left:move_l+'px'});
	}
}
/*-------------------------------------------最新影廊(左面切换)-----------------------------------*/
new_move()
function new_move(){
	var i=0;
	$("#to_right").click(function(){
		i++;
		$(".box_list_l a").eq(i).addClass("on").siblings().removeClass("on");
		$(".mBoxl_b .mBoxl_b_one").eq(i).addClass("on").siblings().removeClass("on");
		for(var t=0;t<5;t++){
			var jdc=$(".mBoxl_b .mBoxl_b_one").eq(i).find(".mbox_in").eq(t);
			jdc.attr(
			"src",
			jdc.attr("data-src"));
		}
		if(i>=9){
			window.location.href='http://www.ddhbb.com'
			}
		})
	$("#to_left").click(function(){
		i--;
		if(i<0){
			i=0;
			}
		$(".box_list_l a").eq(i).addClass("on").siblings().removeClass("on");
		$(".mBoxl_b .mBoxl_b_one").eq(i).addClass("on").siblings().removeClass("on");	
		})	
}
/*-------------------------------------------最新影廊(右面切换)-----------------------------------*/
new_move2();
var l=0;
var l2=0;
zzwqh_r();/*最新(右)*/
var zzwqh_r=setInterval(djzzr,1000);
$(".mBoxl_bin").mouseenter(function(){
	clearInterval(zzwqh_r)
	})
$(".mBoxl_bin").mouseleave(function(){
	zzwqh_r=setInterval(djzzr,1000);
	})	
zzwqh_l();/*最新(左)*/
zzwqh_r2();/*往期(右)*/
var zzwqh_r2=setInterval(djzzr2,1000);
$(".mBoxl_bin").mouseenter(function(){
	clearInterval(zzwqh_r2)
	})
$(".mBoxl_bin").mouseleave(function(){
	zzwqh_r2=setInterval(djzzr2,1000);
	})
zzwqh_l2();/*往期(左)*/
function new_move2(){
	var i=0;
	$("#to_right_zz").click(function(){
		i++;
		$(".box_list_l_zz a").eq(i).addClass("on").siblings().removeClass("on");
		$(".mBoxl_bin_in .mBoxl_bin_in_one").eq(i).addClass("on").siblings().removeClass("on");
		var hdc=$(".mBoxl_bin_in .mBoxl_bin_in_one").eq(i).find(".mbox_in").eq(0);
		hdc.attr(
		"src",
		hdc.attr("data-src"))
		if(i>=2){
			window.location.href='http://www.ddhbb.com'
			}
		})
	$("#to_left_zz").click(function(){
		i--;
		if(i<0){
			i=0;
			}
		$(".box_list_l_zz a").eq(i).addClass("on").siblings().removeClass("on");
		$(".mBoxl_bin_in .mBoxl_bin_in_one").eq(i).addClass("on").siblings().removeClass("on");
		})	
}			
/*---------------------五屏切换点击(右的(最新))------------------------------------------------------------------------------------------------*/
function zzwqh_r(){
		$("#zz_btnr").click(function(){
			djzzr()
			})
	}
/*-----------------向右切换函数(定时器)----------------*/	
function djzzr(){
	l++
	var wlj=$(".mBoxl_bin_in_one.on li").length;
	if(l>(wlj-1)){
		l=0
	}
	$(".mBoxl_bin_in_one.on .nw_zz li").eq(l).addClass("on").siblings().removeClass("on");
	for(var q=0;q<$(".mBoxl_bin_in_one.on li").length;q++){
		var yxc=$(".mBoxl_bin_in_one.on .nw_zz li").eq(l).find(".mbox_in").eq(q)
		yxc.attr(
		"src",
		yxc.attr("data-src"))
		;
	}
}	
/*五凭切换函数(左的(最新))*/	
function zzwqh_l(){
		$("#zz_btnl").click(function(){
			l--
			console.log(l)
			if(l<0){
				l=0;
				}
			$(".mBoxl_bin_in_one.on .nw_zz li").eq(l).addClass("on").siblings().removeClass("on");	
			})
		}		
/*------------------------------------五凭切换函数(右的(往期))--------------------------------------------------------------------------------*/
function zzwqh_r2(){
			$("#zz_btnr2").click(function(){
				djzzr2()
				})
			}
/*---------------------向右切换函数(定时器)-----------------------*/
function djzzr2(){
	l2++
	var wlj=$(".mBoxl_bin_in_one.on li").length;
	if(l2>(wlj-1)){
		l2=0;
		}
	$(".mBoxl_bin_in_one.on .nw_zz li").eq(l2).addClass("on").siblings().removeClass("on");
	for(var q=0;q<$(".mBoxl_bin_in_one.on li").length;q++){
		var yxc=$(".mBoxl_bin_in_one.on .nw_zz li").eq(l2).find(".mbox_in").eq(q)
		yxc.attr(
		"src",
		yxc.attr("data-src"))
		;
	}
}
/*五凭切换函数(左的(往期))*/	
function zzwqh_l2(){
		$("#zz_btnl2").click(function(){
			l2--
			console.log(l)
			if(l2<0){
				l2=0;
				}
			$(".mBoxl_bin_in_one.on .nw_zz li").eq(l2).addClass("on").siblings().removeClass("on");	
			})
		}
/*----------------------------------------------一图(上边的切换)---------------------------------------------------------------------------*/
yitu();
function yitu(){
	var i=0;
	$("#to_right_yt").click(function(){
		i++;
		$(".box_list_l_yt a").eq(i).addClass("on").siblings().removeClass("on");
		$(".one_tu_b .one_tu_in").eq(i).addClass("on").siblings().removeClass("on");
		if(i===1){
			for(var y=0;y<5;y++){
			var yt3=$(".yt_box").eq(1).find(".one_tu_in_one").eq(0).find(".mbox_in").eq(y);
				yt3.attr(
				"src",
				yt3.attr("data-src"));
			}
			times1=setInterval(qqs,1000);
			}
		if(i===2){
			for(var y=0;y<5;y++){
			var yt4=$(".yt_box").eq(2).find(".one_tu_in_one").eq(0).find(".mbox_in").eq(y);
				yt4.attr(
				"src",
				yt4.attr("data-src"));
			}
			times2=setInterval(hqs,1000);
			}
		if(i===3){
			for(var y=0;y<5;y++){
			var yt5=$(".yt_box").eq(3).find(".one_tu_in_one").eq(0).find(".mbox_in").eq(y);
				yt5.attr(
				"src",
				yt5.attr("data-src"));
			}
			times3=setInterval(xss,1000);
			}		
		if(i>3){
			window.location.href='http://www.ddhbb.com'
			}
		})
	$("#to_left_yt").click(function(){
		i--;
		if(i<0){
			i=0;
			}
		$(".box_list_l_yt a").eq(i).addClass("on").siblings().removeClass("on");	
		$(".one_tu_b .one_tu_in").eq(i).addClass("on").siblings().removeClass("on");
		})
}
/*-------------------------------一图(下边的切换给每个小盒子加上对应的宽度,方便切换)-------------------------------------*/
ak();
function ak(){
	for(var m=0;m<4;m++){
		var tf=$(".one_tu_in").eq(m).find(".one_tu_in_one").length;
		$(".yt_box").eq(m).css({width:tf*1260+'px'});
		}
	}
var x=0,
	x1=0,
	x2=0,
	x3=0;	
/*-------------------------------零基础(图片切换)--------------------*/
	var tis=$(".yt_box").eq(0).find(".one_tu_in_one").length;
	$("#yt_btn_r").click(function(){
		ljcs()
		});
	function ljcs(){
		x++;
		if(x>(tis-1)){
			x=0
			}
		$(".yt_box").eq(0).css({left:-x*1260+'px'});
		for(var y=0;y<5;y++){
			var yt2=$(".yt_box").eq(0).find(".one_tu_in_one").eq(x).find(".mbox_in").eq(y);
			yt2.attr(
			"src",
			yt2.attr("data-src"));
		}	
	}	
	$("#yt_btn_l").click(function(){
		x--;
		$(".yt_box").eq(0).css({left:-x*1260+'px'});
		if(x<0){
			x=0
			}
		$(".yt_box").eq(0).css({left:-x*1260+'px'});
		})
/*-------------------------------前期(图片切换)--------------------*/
	var tis1=$(".yt_box").eq(1).find(".one_tu_in_one").length;
	$("#yt_btn_r1").click(function(){
		qqs()
		});
	function qqs(){
		x1++;
		$(".yt_box").eq(1).css({left:-x1*1260+'px'});
		if(x1>(tis1-1)){
			console.log("最后一张卡")
			x1=0;
			}
		$(".yt_box").eq(1).css({left:-x1*1260+'px'});
		for(var y=0;y<5;y++){
			var yt3=$(".yt_box").eq(1).find(".one_tu_in_one").eq(x1).find(".mbox_in").eq(y);
			yt3.attr(
			"src",
			yt3.attr("data-src"));
		}	
	}
	$(".yt_box").eq(1).css({left:-x*1260+'px'});		
	$("#yt_btn_l1").click(function(){
		x1--;
		$(".yt_box").eq(1).css({left:-x1*1260+'px'});
		if(x1<0){
			x1=0
			}
		$(".yt_box").eq(1).css({left:-x1*1260+'px'});
		})
$("#nyf2").mouseenter(function(){
	clearInterval(times1)
	})			
/*-------------------------------后期(图片切换)--------------------*/
	var tis2=$(".yt_box").eq(2).find(".one_tu_in_one").length;
	$("#yt_btn_r2").click(function(){
		hqs()
		});
	function hqs(){
		x2++;
		$(".yt_box").eq(2).css({left:-x2*1260+'px'});
		if(x2>(tis2-1)){
			x2=0;
			}
		$(".yt_box").eq(2).css({left:-x2*1260+'px'});
		for(var y=0;y<5;y++){
			var yt3=$(".yt_box").eq(2).find(".one_tu_in_one").eq(x2).find(".mbox_in").eq(y);
			yt3.attr(
			"src",
			yt3.attr("data-src"));
			}		
		}	
	$("#yt_btn_l2").click(function(){
		x2--;
		$(".yt_box").eq(2).css({left:-x2*1260+'px'});
		if(x2<0){
			x2=0
			}
		$(".yt_box").eq(2).css({left:-x2*1260+'px'});
		})
$("#nyf3").mouseenter(function(){
	clearInterval(times2)
	})				
/*-------------------------------行摄(图片切换)--------------------*/
	var tis3=$(".yt_box").eq(3).find(".one_tu_in_one").length;
	$("#yt_btn_r3").click(function(){
		xss()
		});
	function xss(){
		x3++;
		$(".yt_box").eq(3).css({left:-x3*1260+'px'});
		if(x3>(tis3-1)){
			x3=0;
			}
		$(".yt_box").eq(3).css({left:-x3*1260+'px'});
		for(var y=0;y<5;y++){
			var yt4=$(".yt_box").eq(3).find(".one_tu_in_one").eq(x3).find(".mbox_in").eq(y);
			yt4.attr(
			"src",
			yt4.attr("data-src"));
			}	
		}	
	$("#yt_btn_l3").click(function(){
		x3--;
		$(".yt_box").eq(3).css({left:-x3*1260+'px'});
		if(x3<0){
			x3=0
			}
		$(".yt_box").eq(3).css({left:-x3*1260+'px'});
		})	
$("#nyf4").mouseenter(function(){
	clearInterval(times3)
	})
/*------------------------------装备和最新内容(装备)-------------------------------*/
zb_move()
function zb_move(){
	var i=0;
	$("#to_right_zb").click(function(){
		i++;
		$(".box_list_zb a").eq(i).addClass("on").siblings().removeClass("on");
		$(".mBoxl_zb .mBoxl_zb_in").eq(i).addClass("on").siblings().removeClass("on");
		for(var v=0;v<5;v++){
			var jdcv=$(".mBoxl_zb .mBoxl_zb_in").eq(i).find(".mbox_in").eq(v);
			jdcv.attr(
			"src",
			jdcv.attr("data-src"));
		}
		if(i>=5){
			window.location.href='http://www.ddhbb.com'
			}
		})
	$("#to_left_zb").click(function(){
		i--;
		if(i<0){
			i=0;
			}
		$(".box_list_zb a").eq(i).addClass("on").siblings().removeClass("on");
		$(".mBoxl_zb .mBoxl_zb_in").eq(i).addClass("on").siblings().removeClass("on");	
		})	
}
/*------------------------------装备和最新内容(最新内容)-------------------------------*/
zxnr_move()
function zxnr_move(){
	var i=0;
	$("#to_right_zxnr").click(function(){
		i++;
		$(".box_list_zxnr a").eq(i).addClass("on").siblings().removeClass("on");
		$(".mBoxl_zxnr .mBoxl_zxnr_in").eq(i).addClass("on").siblings().removeClass("on");
		for(var vs=0;vs<4;vs++){
			var jdcvs=$(".mBoxl_zxnr .mBoxl_zxnr_in").eq(i).find(".mbox_in").eq(vs);
			jdcvs.attr(
			"src",
			jdcvs.attr("data-src"));
		}
		if(i>=4){
			window.location.href='http://www.ddhbb.com'
			}
		})
	$("#to_left_zxnr").click(function(){
		i--;
		if(i<0){
			i=0;
			}
		$(".box_list_zxnr a").eq(i).addClass("on").siblings().removeClass("on");
		$(".mBoxl_zxnr .mBoxl_zxnr_in").eq(i).addClass("on").siblings().removeClass("on");	
		})
	}
/*----------------------------------------------------鱼眼---------------------------------------------------------*/
ak2();
function ak2(){
	for(var w=0;w<2;w++){
		var tf=$(".one_yan_b_in_one").eq(w).find(".one_in_yan").length;
		$(".one_yan_b_in_one").eq(w).css({width:tf*1260+'px'});
		}
	}
var x4=0,
	x5=0;
/*---------鱼眼上面的切换---------*/	
yvyan();
function yvyan(){
	var i=0;
	$("#to_right_yy").click(function(){
		i++;
		$(".box_list_l_yy a").eq(i).addClass("on").siblings().removeClass("on");
		$(".one_yan_b_in").eq(i).addClass("on").siblings().removeClass("on");
		if(i===1){
			for(var y=0;y<4;y++){
			var yt9=$(".one_yan_b_in_one").eq(1).find(".one_in_yan").eq(0).find(".mbox_in").eq(y);
				yt9.attr(
				"src",
				yt9.attr("data-src"));
			}
			times5=setInterval(zjs,2000);
			}
		if(i>1){
			window.location.href='http://www.ddhbb.com'
			}
		})
	$("#to_left_yy").click(function(){
		i--;
		if(i<0){
			i=0;
			}
		$(".box_list_l_yy a").eq(i).addClass("on").siblings().removeClass("on");	
		$(".one_yan_b_in").eq(i).addClass("on").siblings().removeClass("on");
		})
}	
/*-----------随机的图片切换-----------*/	
	var tis4=$(".one_yan_b_in").eq(0).find(".one_in_yan").length;
	$("#yy_btn_r").click(function(){
		sjs()
		});
	function sjs(){
		x4++;
		$(".one_yan_b_in_one").eq(0).css({left:-x4*1260+'px'});
		if(x4>(tis4-1)){
			console.log("最后一张卡")
			x4=0;
			}
		$(".one_yan_b_in_one").eq(0).css({left:-x4*1260+'px'});
		for(var y=0;y<4;y++){
			var yt10=$(".lbd_xk").eq(0).find(".one_in_yan").eq(x4).find(".mbox_in").eq(y);
			yt10.attr(
			"src",
			yt10.attr("data-src"));
			}
	}
	$("#yy_btn_l").click(function(){
		x4--;
		$(".one_yan_b_in_one").eq(0).css({left:-x4*1260+'px'});
		if(x4<0){
			x4=0
			}
		$(".one_yan_b_in_one").eq(0).css({left:-x4*1260+'px'});
		})
/*-----------最近的图片切换-----------*/	
	var tis5=$(".one_yan_b_in").eq(1).find(".one_in_yan").length;
	$("#yy_btn_r1").click(function(){
		zjs()
		});
	function zjs(){
		x5++;
		$(".one_yan_b_in_one").eq(1).css({left:-x5*1260+'px'});
		if(x5>(tis5-1)){
			x5=0;
			}
		$(".one_yan_b_in_one").eq(1).css({left:-x5*1260+'px'});
		for(var y=0;y<4;y++){
			var yt11=$(".lbd_xk").eq(1).find(".one_in_yan").eq(x5).find(".mbox_in").eq(y);
			yt11.attr(
			"src",
			yt11.attr("data-src"));
			}
	}
	$("#yy_btn_l1").click(function(){
		x5--;
		$(".one_yan_b_in_one").eq(1).css({left:-x5*1260+'px'});
		if(x5<0){
			x5=0
			}
		$(".one_yan_b_in_one").eq(1).css({left:-x5*1260+'px'});
		})
/*--------------------------------------------热门攻略和最近文章(热门攻略)--------------------------------------------------*/	
rmgl_move()
function rmgl_move(){
	var i=0;
	$("#to_right_rmgl").click(function(){
		i++;
		$(".box_list_rmgl a").eq(i).addClass("on").siblings().removeClass("on");
		$(".mBoxl_rmgl .mBoxl_zb_in").eq(i).addClass("on").siblings().removeClass("on");
		for(var j=0;j<5;j++){
			var rmgls=$(".mBoxl_rmgl .mBoxl_zb_in").eq(i).find(".mbox_in").eq(j);
			rmgls.attr(
			"src",
			rmgls.attr("data-src"));
		}
		if(i>=4){
			window.location.href='http://www.ddhbb.com'
			}
		})
	$("#to_left_zb").click(function(){
		i--;
		if(i<0){
			i=0;
			}
		$(".box_list_rmgl a").eq(i).addClass("on").siblings().removeClass("on");
		$(".mBoxl_rmgl .mBoxl_zb_in").eq(i).addClass("on").siblings().removeClass("on");	
		})	
}	
/*------------------------------热门攻略和最近文章(最近文章)-----------------------------------------------------------------*/
var zjwz_gs=$(".mBoxl_zjwz .mBoxl_zjwz_in").length;
	$(".mBoxl_zjwz_bt").css({width:zjwz_gs*464+'px'});
	var ds=0;
	$("#to_right_zjwz").click(function(){
		zjnm();
		
		})
		function zjnm(){		
			ds++;
			$(".mBoxl_zjwz_bt").css({left:-ds*464+'px'})		
			for(var vt=0;vt<4;vt++){
				var zjwzs=$(".mBoxl_zjwz_in").eq(ds).find(".mbox_in").eq(vt);
				zjwzs.attr(
				"src",
				zjwzs.attr("data-src"));
			}
			if(ds>zjwz_gs-1){
				ds=0;
			}
			$(".mBoxl_zjwz_bt").css({left:-ds*464+'px'})	
		}	
	$("#to_left_zjwz").click(function(){
		ds--;
		if(ds<0){
			ds=0;
			}
		$(".mBoxl_zjwz_bt").css({left:-ds*464+'px'})	
		})
/*------------------------------------------影像讲堂----------------------------------------*/	
yxjt()	
function yxjt(){
	var i=0;
	$("#to_right_yxjt").click(function(){
		i++;
		if(i>1){
			window.location.href='http://www.ddhbb.com'
			}
		$(".box_list_l_yxkt a").eq(i).addClass("on").siblings().removeClass("on");
		$(".yxjt_b_in").eq(i).addClass("on").siblings().removeClass("on");
		for(var y=0;y<8;y++){
			var	yt13=$(".yxjt_b_in").eq(i).find(".mbox_in").eq(y);
				yt13.attr(
				"src",
				yt13.attr("data-src")
				)
			}
		})
	$("#to_left_yxjt").click(function(){
		i--;
		if(i<0){
			i=0;
			}
		$(".box_list_l_yxkt a").eq(i).addClass("on").siblings().removeClass("on");
		$(".yxjt_b_in").eq(i).addClass("on").siblings().removeClass("on");
		})	
	}	
/*--------------------------------------------热门专题----------------------------------------------*/	
ak3();
function ak3(){
	for(var d=0;d<2;d++){
		var tfs=$(".one_hot_b_in_one").eq(d).find(".one_in_yan").length;
		$(".one_hot_b_in_one").eq(d).css({width:tfs*1260+'px'});
		}
	}
var x6=0,
	x7=0;
/*---------热门专题上面的切换---------*/	
hotzt();
function hotzt(){
	var i=0;
	$("#to_right_hot").click(function(){
		i++;
		$(".box_list_l_hot a").eq(i).addClass("on").siblings().removeClass("on");
		$(".one_hot_b_in").eq(i).addClass("on").siblings().removeClass("on");
		if(i===1){
			for(var y=0;y<4;y++){
			var yt14=$(".one_hot_b_in_one").eq(1).find(".one_in_yan").eq(0).find(".mbox_in").eq(y);
				yt14.attr(
				"src",
				yt14.attr("data-src"));
			}
			times7=setInterval(yjss,2000);
			}
		if(i>1){
			window.location.href='http://www.ddhbb.com'
			}
		})
	$("#to_left_hot").click(function(){
		i--;
		if(i<0){
			i=0;
			}
		$(".box_list_l_hot a").eq(i).addClass("on").siblings().removeClass("on");	
		$(".one_hot_b_in").eq(i).addClass("on").siblings().removeClass("on");
		})
}	
/*-----------进行中的图片切换-----------*/	
	var tis6=$(".one_hot_b_in_one").eq(0).find(".one_in_yan").length;
	$("#hot_btn_r").click(function(){
		jxs()
		});
	function jxs(){
		x6++;
		$(".one_hot_b_in_one").eq(0).css({left:-x6*1260+'px'});
		if(x6>(tis6-1)){
			console.log("最后一张卡")
			x6=0;
			}
		$(".one_hot_b_in_one").eq(0).css({left:-x6*1260+'px'});
		for(var y=0;y<4;y++){
			var yt15=$(".lbd_xk2").eq(0).find(".one_in_yan").eq(x6).find(".mbox_in").eq(y);
			yt15.attr(
			"src",
			yt15.attr("data-src"));
			}
	}
	$("#hot_btn_l").click(function(){
		x6--;
		$(".one_hot_b_in_one").eq(0).css({left:-x6*1260+'px'});
		if(x6<0){
			x6=0
			}
		$(".one_hot_b_in_one").eq(0).css({left:-x6*1260+'px'});
		})
/*-----------最近的图片切换-----------*/	
	var tis7=$(".one_hot_b_in_one").eq(1).find(".one_in_yan").length;
	$("#hot_btn_r1").click(function(){
		yjss()
		});
	function yjss(){
		x7++;
		$(".one_hot_b_in_one").eq(1).css({left:-x7*1260+'px'});
		if(x7>(tis7-1)){
			x7=0;
			}
		$(".one_hot_b_in_one").eq(1).css({left:-x7*1260+'px'});
		for(var y=0;y<4;y++){
			var yt16=$(".lbd_xk2").eq(1).find(".one_in_yan").eq(x7).find(".mbox_in").eq(y);
			yt16.attr(
			"src",
			yt16.attr("data-src"));
			}
	}
	$("#hot_btn_l1").click(function(){
		x7--;
		$(".one_hot_b_in_one").eq(1).css({left:-x7*1260+'px'});
		if(x7<0){
			x7=0
			}
		$(".one_hot_b_in_one").eq(1).css({left:-x7*1260+'px'});
		})	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	