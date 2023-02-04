// class ExpectedSolution {

//     public int[] plusOne(int[] digits) {
//       for (int i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//           digits[i]++;
//           return digits;
//         }
//         digits[i] = 0;
//       }
//       int res[] = new int[digits.length + 1];
//       res[0] = 1;
//       return res;
//     }
//   }
  
  
//   // Creating Solution for problem ->  Plus One
  
//   public class Main {
//       static Scanner sc = new Scanner(System.in);
//       static boolean isWrong = false;
//       public static void main(String[] args) {
//           // Case Type
//           // 1 implies case for custom input
//           // 2 implies case for submission of problem
//           int caseType = 0;
//           caseType = sc.nextInt();
//           if(caseType==1){
//               takeInputForCustomEvaluation();
//           }
//           else if(caseType == 2){
//               submissionEvaluation();
//           }
//       }
//       public static void takeInputForCustomEvaluation(){
//           // take input for no. of elements
//           // Scanner sc = new Scanner(System.in);
//           int n = sc.nextInt();
//           int[] nums1 = new int[n];
//           int[] nums2 = new int[n];
          
//           for(int i=0; i<n; i++){
//               nums1[i] = sc.nextInt();
//               nums2[i] = nums1[i];
//           }
//           ExpectedSolution exp_sol = new ExpectedSolution();
//           Solution sol = new Solution();
          
//           int[] expectedResult = exp_sol.plusOne(nums1);
//           int[] userResult = sol.plusOne(nums2);
          
//           int status = expectedResult.length != userResult.length ? 0 : 1;
//           for(int i=0; i<userResult.length; i++){
//               System.out.print(userResult[i]+" ");
//           }
          
//       }
//       public static void submissionEvaluation(){
//           // take input for the no. of testcases
//           int t = sc.nextInt();
          
//           while(t-- > 0 && !isWrong){
//               // take input for no. of elements
  
//               int n = sc.nextInt();
//               int[] input = new int[n];
//               int[] nums1 = new int[n];
//               int[] nums2 = new int[n];
  
//               for(int i=0; i<n; i++){
//                   input[i] = sc.nextInt();
//                   nums1[i] = input[i];
//                   nums2[i] = nums1[i];
//               }
//               ExpectedSolution exp_sol = new ExpectedSolution();
//               Solution sol = new Solution();
  
//               int[] expectedResult = exp_sol.plusOne(nums1);
//               int[] userResult = sol.plusOne(nums2);
//               validate(expectedResult,userResult);
//               if(isWrong){
//                   System.out.println("First Testcase where your code fails :");
//                   System.out.println();
                  
//                   System.out.println("Testcase Input :");
//                   System.out.println(n);
//                   for(int i=0; i<input.length; i++){
//                       System.out.print(input[i]+" ");
//                   }
//                   System.out.println();
//                   System.out.println();
                  
//                   System.out.println("Your Output :");
//                   for(int i=0; i<userResult.length; i++){
//                       System.out.print(userResult[i]+" ");
//                   }
//                   System.out.println();
                  
//                   System.out.println("Expected Output : ");
//                   for(int i=0; i<expectedResult.length; i++){
//                       System.out.print(expectedResult[i]+" ");
//                   }
//               }
//           }
//           if(!isWrong){
//               System.out.print("{true}");
//           }
//       }
//       public static void validate(int[] expectedResult,int[] userResult){
//           if(expectedResult.length!=userResult.length){
//               isWrong = true;
//               return;
//           }
//           for(int i=0; i<userResult.length; i++){
//               if(userResult[i]!=expectedResult[i]){
//                   isWrong = true;
//                   break;
//               }
//           }
//       }
//   }