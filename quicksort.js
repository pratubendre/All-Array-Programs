let a = [10,4,3,6,2];
let temp;

function partition(low,high)
{
    let pivot = a[low];
    let i = low;
    let j = high;

    while(i<j)
    {
        while(a[i] <= pivot)
    {
        i++;
    }
    while(a[j] > pivot)
    {
        j--;
    }

    if(i<j)
    {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    }

    temp = a[low];
    a[low] = a[j];
    a[j] = temp;

    return j;
}

function quicksort(low,high)
{
    if(low < high)
    {
        let pivot = partition(low,high);
        quicksort(low,pivot - 1);
        quicksort(pivot+ 1,high);
    }
}

quicksort(0,a.length-1);

console.log("Sorted Array :: " ,a);


