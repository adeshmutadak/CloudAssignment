package Java;

public class Panagram {
    public static void main(String[] args) {

        String str="thisisiasdkgsseert";
        int ans[]=new int[26];
        for(int i=0;i<str.length();i++){
            char ch=str.charAt(i);
            ans[ch-'a'] ++ ;

        }
        for(int i=0;i<26;i++){
            if(ans[i]==0){
                System.out.println(false);
            }
        }
         System.out.println(true);
    }
}
