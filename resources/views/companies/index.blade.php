@extends('layout')

@section('content')
    <div id="company-list-header">
        <span class="header-text">Company List</span>
        <span id="add-company-button"><a href="{{ route('companies.create') }}" class="btn btn-primary mb-3"><i class="fi fi-rr-plus-small"></i>Add Company</a></span>
    </div>

    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <table id="two-q-table" class="hover order-column row-border responsive">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($companies as $company)
                <tr>
                    <td><a href="{{ route('companies.show', $company->id) }}" class="btn btn-md">
                            @if ($company->logo)
                                <img src="{{ asset('storage/' . $company->logo) }}" width="50" height="50" alt="Logo">
                            @endif
                            {{ $company->name }}
                        </a>
                    </td>
                    <td>{{ $company->email }}</td>
                    <td><a href="{{ $company->website }}" target="_blank">{{ $company->website }}</a></td>
                    <td>
                        <a href="{{ route('companies.edit', $company->id) }}" class="btn btn-sm btn-warning"><i class="fi fi-rr-pen-square"></i>Edit</a>
                        <form action="{{ route('companies.destroy', $company->id) }}" method="POST" style="display: inline-block;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-sm btn-danger"><i class="fi fi-rr-trash"></i>Delete</button>
                        </form>
                        <a href="{{ route('companies.show', $company->id) }}" class="btn btn-sm btn-info"><i class="fi fi-rr-eye"></i>View</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    @vite('resources/js/app.js')
@endsection
