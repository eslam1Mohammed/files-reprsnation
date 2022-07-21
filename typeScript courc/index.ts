interface Ireport
{
    header();
    body();
    footer();
}
class pdf implements Ireport
{
    header() {
        document.write(`<p>i am header pdf </p>`);
    }
    body() {
        
        document.write(`<p>i am body pdf </p>`);
    }
    footer() 
        {
            document.write(`<p>i am footer pdf </p>`);
     }
}
class word implements Ireport
{
    header() {
        document.write(`<p>i am header word </p>`);
    }
    body() {
        
        document.write(`<p>i am body word </p>`);
    }
    footer() 
        {
            document.write(`<p>i am footer word </p>`);
     }
}
class execl implements Ireport
{
    header() {
        document.write(`<p>i am header excel </p>`);
    }
    body() {
        
        document.write(`<p>i am body excel </p>`);
    }
    footer() 
        {
            document.write(`<p>i am footer excel </p>`);
     }
}
class report
{
    printmyReport(report:Ireport)
    {
        report.header();
        report.body();
        report.footer();
    }
}