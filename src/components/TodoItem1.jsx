function TodoItem1(){



     let todoName = 'Buy Milk';
     let todoDate = '4/09/2024';
    return  <div class="container">
    



    <div class="row kg-row ">
        <div class="col-6">
          {todoName}
        </div>
        <div class="col-4">
        {todoDate}
        </div>
        <div class="col-2 text-center">
        <button type="button" class="btn btn-danger kg-button ">Delete</button>

        </div>
      </div>

    </div>
    
}
export default TodoItem1