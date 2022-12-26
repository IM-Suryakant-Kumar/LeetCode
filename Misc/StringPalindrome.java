import java.util.Scanner;

public class StringPalindrome {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String A = sc.next();

        int start = 0;
        int end = A.length() - 1;
        boolean b = true;

        while (start <= end) {
            char sCh = A.charAt(start);
            char eCh = A.charAt(end);

            if (sCh != eCh) {
                b = false;
                break;
            }
            
            start++;
            end--;
        }

        if (b) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }

    }
}
