import java.util.ArrayList;
import java.util.Scanner;

public class PosNegZeroRatios {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        ArrayList<Integer> al = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            al.add(scn.nextInt());
        }

        calcPosNegZeroRatios(al, n);
    }

    public static void calcPosNegZeroRatios(ArrayList<Integer> arr , int n){
        int pos = 0;
        int neg = 0;
        int zero = 0;

        for (int i = 0; i < arr.size(); i++) {
            if(arr.get(i) > 0){
                pos++;
            } else if (arr.get(i) < 0){
                neg++;
            } else {
                zero++;
            }
        }

        System.out.printf("%.6f \n", (float)neg/n);
        System.out.printf("%.6f \n", (float)zero/n);
        System.out.printf("%.6f \n", (float)pos/n);
    }
}
