import java.util.Scanner;

public class LexicoGraphically {
    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        String B=sc.next();
        /* Enter your code here. Print output to STDOUT. */
        System.out.println(A.length() + B.length()); 

        // pos - A > B
        // 0 - A == B
        // Neg - A < B
        // Comparing A and B
        int res = A.compareTo(B);
        if(res > 0){
            System.out.println("Yes");
        } else{
            System.out.println("No");
        }

        // captilizing Strings
        String frstlA = A.substring(0, 1);
        frstlA = frstlA.toUpperCase();
        String sndsA = A.substring(1, A.length());
        A = frstlA + sndsA;

        String frstlB = B.substring(0, 1);
        frstlB = frstlB.toUpperCase();
        String sndsB = B.substring(1, B.length());
        B = frstlB + sndsB;

        System.out.println(A + " " + B);
    }
}
