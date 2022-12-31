# **4. Median of Two Sorted Arrays**

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

**Example 1:**

<pre><strong>Input:</strong> nums1 = [1,3], nums2 = [2]
<strong>Output:</strong> 2.00000
<strong>Explanation:</strong> merged array = [1,2,3] and median is 2.
</pre>

**Example 2:**

<pre><strong>Input:</strong> nums1 = [1,2], nums2 = [3,4]
<strong>Output:</strong> 2.50000
<strong>Explanation:</strong> merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
    <li><code>nums1.length == m</code></li>
    <li><code>nums2.length == n</code></li>
    <li><code>0 &lt;= m &lt;= 1000</code></li>
    <li><code>0 &lt;= n &lt;= 1000</code></li>
    <li><code>1 &lt;= m + n &lt;= 2000</code></li>
    <li><code>-10<sup>6</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></li>
</ul>

