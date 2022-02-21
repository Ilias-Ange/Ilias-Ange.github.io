#include <iostream>
#include <iomanip>
#include <fstream>
using namespace std;
int main(){
    int start,end;
    cin>>start>>end;
    ofstream ofs("out.txt");
    for (int i=start;i<=end;i++){
        ofs<<"<div id=\"R"<<setw(3)<<setfill('0')<<i<<"\">"<<endl;
        ofs<<"    "<<"<h2 class=\"name\">国道"<<i<<"号</h2>"<<endl;
        ofs<<"    "<<"<img src=\"../img/Onigiri/"<<"na.jpg\" alt=\"R"<<setw(3)<<setfill('0')<<i<<"\">"<<endl;
        ofs<<"    "<<"<p class =\"place\">Null</p>"<<endl;
        ofs<<"    "<<"<p class =\"date\">Null</p>"<<endl;
        ofs<<"    "<<"<p class =\"comment\">Null</p>"<<endl;
        ofs<<"</div>"<<endl;
    }
}
/*
<div id="R001">
                    <h2 class="name">国道1号</h2>
                    <img src="/onigiri/001.jpg" alt="R001">
                    <p class="place"></p>
                    <p class="date"></p>
                    <p class="comment"></p>
                </div>
                */