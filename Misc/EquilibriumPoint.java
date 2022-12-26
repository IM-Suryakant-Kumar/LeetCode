public class EquilibriumPoint {

    public static int equilibriumPoint(long arr[], int n) {

        // Your code here
        int ans = 0;
        int maxidx = - 1;
        int lSum;
        int rSum;

        // check for max
        for (int i = 0; i < arr.length; i++) {
            if (maxidx < arr[i]) {
                maxidx = i;
            }
        }

        // check for LeftSum
        
        return ans;
    }

    public static void main(String[] args) {
        System.out.println(equilibriumPoint(new long[] { 1, 3, 5, 2, 2 }, 5));
    }
}