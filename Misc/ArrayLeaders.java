import java.util.ArrayList;

public class ArrayLeaders {

    static ArrayList<Integer> leaders(int arr[], int n) {
        // Your code here
        ArrayList<Integer> ans = new ArrayList<>();

        // First Approach
        // for (int i = 0; i < arr.length; i++) {
        //     int leader = arr[i];
        //     boolean beLeader = true;
        //     for (int j = i + 1; j < arr.length; j++) {
        //         if(leader < arr[j]){
        //             beLeader = false;
        //             break;
        //         }
        //     }
        //     if(beLeader){
        //         ans.add(leader);
        //     }
        // }

        // Second Approach
        int leaderFromRight = arr[arr.length - 1];
        ans.add(leaderFromRight);
        for (int i = arr.length - 2; i >= 0; i--) {
            if(arr[i] >= leaderFromRight){
                leaderFromRight = arr[i];
                ans.add(leaderFromRight);
            }
        }

        // reverse ArrayList ans
        int s = 0;
        int e = ans.size() - 1;
        while(s <= e){
            int temp = ans.get(s);
            ans.set(s, ans.get(e));
            ans.set(e, temp);
            
            s++;
            e--;
        }

        return ans;
    }

    public static void main(String[] args) {
        ArrayList<Integer> res = leaders(new int[]{16, 17, 4, 3, 5, 2}, 6);
        System.out.println(res);
    }
}
