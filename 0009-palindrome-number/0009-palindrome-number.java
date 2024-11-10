class Solution {
    public boolean isPalindrome(int x) {
        int rev=0, t=x;
        while(t>0){
            int rem=t%10;
            rev=rev*10+rem;
            t=t/10;
        }
        return x==rev;
    }
}