class Solution {
    public int[] searchRange(int[] nums, int target) {
        int s=start(nums, target);
        int e=end(nums, target);
        return new int[]{s, e};
    }
    static int start(int[] nums, int target){
        int s=0, e=nums.length-1, mid, in=-1;
        while(s<=e){
            mid=s+(e-s)/2;
            if(nums[mid]==target){
                in=mid;
                e=mid-1;
            }else if(target<nums[mid]) e=mid-1;
            else s=mid+1;
        }
        return in;
    }
    static int end(int[] nums, int target){
        int s=0, e=nums.length-1, mid, in=-1;
        while(s<=e){
            mid=s+(e-s)/2;
            if(nums[mid]==target){
                in=mid;
                s=mid+1;
            }else if(target<nums[mid]) e=mid-1;
            else s=mid+1;
        }
        return in;
    }
}