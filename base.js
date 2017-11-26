/**
 * Created by FengZhen on 2017/11/26.
 */
window.onload=function(){

    //鼠标点击邮箱地址注册框，里面的内容清空。鼠标移出该注册框，完成邮箱格式的验证
    var oMessage=document.getElementById('message');
    var oUrl=document.getElementById('email_url');
    oUrl.onfocus=function(){
        if(this.value == '建议使用手机号进行注册')
        {
            this.value=null;
            this.style.color='black';
        }

    };
    oUrl.onblur=function(){
        if(this.value == '')
        {
            this.value='建议使用手机号进行注册';
            this.style.color='#999';
        }

        //鼠标移出该注册框，对邮箱的格式进行验证
        var email_patten=/^[a-zA-Z][\w]{5,17}$/;
        if(!email_patten.test(this.value))
        {
            alert('邮箱格式不合法');
        }
    };

    //鼠标点击注册邮箱的三个导航条，更换背景，使得蓝色背景框在当前注册类型
    var oTab=document.getElementById('middle_nav');
    var oLi=oTab.getElementsByTagName('li');
    oLi[0].onclick=function(){
        oTab.style.background='url("images/tab.jpg")no-repeat 0 0';
    }
    oLi[1].onclick=function(){
        oTab.style.background='url("images/tab.jpg")no-repeat 0 -59px';
    }
    oLi[2].onclick=function(){
        oTab.style.background='url("images/tab.jpg")no-repeat 0 -112px';
    }

    //鼠标点击提交按钮，对以上填写的信息的基本格式进行验证，同时改变提交按钮的颜色
    var oSub=document.getElementById('sub');
    var oPass=document.getElementById('pw');
    var oConfirmPass=document.getElementById('confirm_pw');
    oSub.onmouseup=function(){
        oSub.style.background='url("images/glb_v2.png") -432px -360px no-repeat';
    };
    oSub.onmousedown=function(){
        oSub.style.background='url("images/glb_v2.png") -288px -360px no-repeat';
    };
    oSub.onclick=function(){
        //对邮箱格式进行验证
        var email_patten=/^[a-zA-Z][\w]{5,17}$/;
        if(!email_patten.test(oUrl.value))
        {
            alert('邮箱格式不合法');
        }
        //对密码长度进行验证
        if(oPass.value.length>16 || oPass.value.length<6)
        {
            alert('密码长度不得少于6位不得多余16位!');
            oPass.focus();
        }
        //对两次输入的密码是否一致进行验证
        if(oPass.value != oConfirmPass.value) {
            alert('两次输入的密码不一致，请重新输入');
            oConfirmPass.value=null;
            oConfirmPass.focus();
        }
    };

};