import java.util.Scanner;

public class SmallestLargestSubsLexico {

    public static String getSmallestAndLargest(String s, int k) {
        String smallest = "";
        String largest = "";

        // Complete the function
        // 'smallest' must be the lexicographically smallest substring of length 'k'
        // smallest = s.substring(0, k);

        smallest = s.substring(0, k);
        largest = s.substring(0, k);

        for (int i = 1; i <= s.length() - k; i++) {
            // pos - A > B
            // 0 - A == B
            // Neg - A < B
            String str = s.substring(i, i + k);
            if (str.compareTo(smallest) < 0) {
                smallest = s.substring(i, i + k);
            } else if (str.compareTo(largest) > 0) {
                largest = s.substring(i, i + k);
            }
        }

        // 'largest' must be the lexicographically largest substring of length 'k'

        return smallest + "\n" + largest;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.next();
        int k = scan.nextInt();
        scan.close();

        System.out.println(getSmallestAndLargest(s, k));
    }
}