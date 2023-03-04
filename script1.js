let value1=document.getElementById("result");
function clear1()
{
    value1.value=0;
}
function delete1()
{
    if(value1.value.length==1)
    {
        value1.value=0;
    }
    else
    {
        value1.value=value1.value.slice(0,-1);
    }
    
}
function display(n)
{
    if (value1.value==0)
    {
        value1.value=n;
    }
    else
    {
    value1.value=value1.value+n;
    }
}
function assignment()
{
    try
    {
    value1.value=eval(value1.value);
    }
    catch(error)
    {
        value1.value="ERR";
    }
}