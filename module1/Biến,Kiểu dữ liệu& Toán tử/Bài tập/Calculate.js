
var Text = "Calculator programmed in Java Script";



var fact = Math.PI / 180.0;
var inv = 0;    <!-- 1 if inverse function has to be taken -->
var flag = 0;   <!-- 0 if "=" is pressed  -->
var flag2 = 0;  <!-- 1 if "+","-","*" or "/" pressed  -->
var popen = 0;  <!-- 0 if no "(" is open -->
var point = 0;  <!-- 1 if "." is pressed -->

function Clr(Fi,Ei)
{
    flag2 = 0;
    popen = 0;
    point = 0;
    document.forms[Fi].elements[Ei].value = "";
}
function Res(Fi,Ei)
{
    if ( (flag2 == 0) && (popen == 0) )
    {
        var x = eval(document.forms[Fi].elements[Ei].value);
        document.forms[Fi].elements[Ei].value = x;
        flag = 0;
        point = 0;
    }
}
function Add(Fi,Ei,n)
{
    var st = document.forms[Fi].elements[Ei].value;
    var len = st.length;

    if (st.charAt(len-1) == ")")
        return;

    if (n=="PI")
    {
        if ( (len > 0) && (flag2 == 0) )
            return;
        var x = Math.PI;
        n = x;
    }

    if (flag==0)
        document.forms[Fi].elements[Ei].value = "";

    document.forms[Fi].elements[Ei].value =
        document.forms[Fi].elements[Ei].value + n;
    flag = 1;
    flag2 = 0;
}
function Par(Fi,Ei,n)
{
    var st = document.forms[Fi].elements[Ei].value;
    var len = st.length;

    if ( (n == "(") )
    {
        if (st.charAt(len-1) == ")")
            return;
        else if (st.charAt(len-1) == "(")
            popen++;
        else
        {
            if ( (len > 0) && (flag2 == 0) )
                return;
            else
                popen++;
        }
    }
    else if ( (n == ")") && (popen > 0) )
    {
        if (st.charAt(len-1) == "(")
            return;
        else
            popen--;
    }
    else
        return;

    document.forms[Fi].elements[Ei].value =
        document.forms[Fi].elements[Ei].value + n;
    flag = 1;
    point = 0;
}
function Bck(Fi,Ei)
{
    var st = document.forms[Fi].elements[Ei].value;
    var len = st.length;
    if (len > 0)
    {
        if (st.charAt(len-1) == ".")
            point = 0;

        if (st.charAt(len-1) == "+")
            flag2 = 0;
        if (st.charAt(len-1) == "-")
            flag2 = 0;
        if (st.charAt(len-1) == "*")
            flag2 = 0;
        if (st.charAt(len-1) == "/")
            flag2 = 0;

        if (st.charAt(len-1) == ")")
            popen++;
        if (st.charAt(len-1) == "(")
            popen--;

        document.forms[Fi].elements[Ei].value=st.substring(0,len-1);
        flag = 1;
    }
}
function Pnt(Fi,Ei)
{
    if ( (flag2 == 0) && (point == 0) )
    {
        flag2 = 1;
        flag = 1;
        point = 1;
        document.forms[Fi].elements[Ei].value =
            document.forms[Fi].elements[Ei].value + ".";
    }
}
function Fnc(Fi,Ei,n)
{
    var st = document.forms[Fi].elements[Ei].value;
    var len = st.length;
    if (st.charAt(len-1) == "(")
        return;

    if (flag2 == 0)
    {
        flag2 = 1;
        flag = 1;
        point = 0;
        document.forms[Fi].elements[Ei].value =
            document.forms[Fi].elements[Ei].value + n;
    }
}
function Inv()
{
    inv = 1;
}
function Chs(Fi,Ei)
{
    var st = document.forms[Fi].elements[Ei].value;
    var len = st.length;
    if (st.charAt(0) == "-")
        st = st.substring(1,len);
    else
        st = "-" + st;
    document.forms[Fi].elements[Ei].value = st;
    flag = 1;
}
function Spc(Fi,Ei,f)
{
    if ( (flag2 == 0) && (popen == 0) )
    {
        var y = 0.0;
        var st = document.forms[Fi].elements[Ei].value;
        if (st.length == 0)
            x = 0;
        else
            x = eval(st);

        if (f=="sqrt")
        {
            if (inv == 0)
                y = (x>0) ? Math.sqrt(x) : "";
            else
                y = x * x;
        }
        if (f=="pow2")
        {
            if (inv == 1)
                y = (x>0) ? Math.sqrt(x) : "";
            else
                y = x * x;
        }
        if (f=="exp")
        {
            if (inv == 1)
                y = (x>0) ? Math.log(x) : "";
            else
                y = Math.exp(x);
        }
        if (f=="ln")
        {
            if (inv == 0)
                y = (x>0) ? Math.log(x) : "";
            else
                y = Math.exp(x);
        }
        if (f=="sin")
        {
            if (inv == 0)
                y = Math.sin(x*fact);
            else
                y = 1./fact * Math.asin(x);
        }
        if (f=="cos")
        {
            if (inv == 0)
                y = Math.cos(x*fact);
            else
                y = 1./fact * Math.acos(x);
        }
        if (f=="tan")
        {
            if (inv == 0)
                y = Math.tan(x*fact);
            else
                y = 1./fact * Math.atan(x);
        }
        if (f=="inv")
        {
            y = (inv==0) ? 1 / x : x;
        }
        document.forms[Fi].elements[Ei].value = y;
        inv = 0;
        point = 0;
    }
}