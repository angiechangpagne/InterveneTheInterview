def moveZeroes(self, nums):
  counter = 0;
  for i in nums:
    if i != 0:
      nums[counter]=i
      counter+=1;
  
  for i in range(counter, len(nums)):
    nums[i]=0



#second option uses tuples
def moveZeroes(self, nums):
  i = 0
  for j in range(len(nums)):
    nums[i],i= (nums[j], i+1) if nums[j]!=0 else (nums[i], i)
  for k in range(counter, len(nums)):
    nums[k]=0


#shorter more elegant approach
def moveZeroes(self, nums):
  j = 0
  for i in range(len(nums)):
    if nums[i]!=0:
      nums[j], nums[i], j = nums[i], nums[j], j+1


