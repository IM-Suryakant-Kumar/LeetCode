class Solution {
    public double findMedianSortedArrays(int[] arr, int[] arr1) {
        int[] merged = new int[arr.length + arr1.length];

        int i = 0;
        int j = 0;
        int k = 0;

        while (i < arr.length && j < arr1.length) {
            if (arr[i] < arr1[j]) {
                merged[k] = arr[i];
                i++;
                k++;
            } else {
                merged[k] = arr1[j];
                j++;
                k++;
            }
        }

        while (i < arr.length) {
            merged[k] = arr[i];
            i++;
            k++;
        }

        while (j < arr1.length) {
            merged[k] = arr1[j];
            j++;
            k++;
        }

        double median = 0.0;
        int med = merged.length / 2;

        if(merged.length % 2 == 1){
            median = merged[med];
        } else {
            median = (merged[med] + merged[med - 1]) / 2.0;
        }

        return median;
    }
}
